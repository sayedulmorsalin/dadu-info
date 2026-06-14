"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const MODEL_URL = "/models/3dboot.glb";

export default function BootBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
      preserveDrawingBuffer: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    const keyLight = new THREE.DirectionalLight(0xffffff, 4.2);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x8fffd0, 2.4);
    rimLight.position.set(-5, 2, -3);
    scene.add(rimLight);

    const fillLight = new THREE.HemisphereLight(0xbfffea, 0x06182c, 2.2);
    scene.add(fillLight);

    let boot: THREE.Group | null = null;
    let animationFrame = 0;
    let isDragging = false;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let userRotationX = 0;
    let userRotationY = 0;
    const baseRotation = new THREE.Euler(-0.18, -0.62, 0.08);
    const loader = new GLTFLoader();

    const frameModel = (model: THREE.Group) => {
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxAxis = Math.max(size.x, size.y, size.z) || 1;
      const scale = 5.4 / maxAxis;

      model.position.sub(center);
      model.scale.setScalar(scale);
      model.rotation.copy(baseRotation);
      model.position.set(2.45, -0.08, 0);
      scene.add(model);
      boot = model;
    };

    loader.load(MODEL_URL, (gltf) => {
      gltf.scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.castShadow = false;
          object.receiveShadow = false;
        }
      });
      frameModel(gltf.scene);
    });

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      const isMobile = width < 720;

      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.position.set(isMobile ? 0.65 : 0.35, isMobile ? 0.35 : 0.15, isMobile ? 8.2 : 7.2);
      camera.lookAt(isMobile ? 0.25 : 0.9, 0, 0);
      camera.updateProjectionMatrix();

      if (boot) {
        boot.position.x = isMobile ? 0.85 : 2.45;
        boot.position.y = isMobile ? -0.7 : -0.08;
      }
    };

    const animate = () => {
      animationFrame = window.requestAnimationFrame(animate);

      if (boot) {
        if (!isDragging) {
          userRotationY += 0.003;
        }

        boot.rotation.x = baseRotation.x + userRotationX;
        boot.rotation.y = baseRotation.y + userRotationY;
        boot.rotation.z = baseRotation.z + Math.sin(Date.now() * 0.0012) * 0.025;
      }

      renderer.render(scene, camera);
    };

    const getInteractiveTarget = () => {
      const hero = mount.closest(".hero");
      return hero instanceof HTMLElement ? hero : renderer.domElement;
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (target instanceof Element && target.closest("a, button")) {
        return;
      }

      event.preventDefault();
      isDragging = true;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;

      if (event.currentTarget instanceof HTMLElement) {
        event.currentTarget.setPointerCapture(event.pointerId);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isDragging) {
        return;
      }

      const deltaX = event.clientX - lastPointerX;
      const deltaY = event.clientY - lastPointerY;

      userRotationY += deltaX * 0.01;
      userRotationX = THREE.MathUtils.clamp(userRotationX + deltaY * 0.006, -0.7, 0.7);
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
    };

    const handlePointerUp = (event: PointerEvent) => {
      isDragging = false;

      if (
        event.currentTarget instanceof HTMLElement &&
        event.currentTarget.hasPointerCapture(event.pointerId)
      ) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
    };

    const interactiveTarget = getInteractiveTarget();
    resize();
    animate();
    window.addEventListener("resize", resize);
    interactiveTarget.addEventListener("pointerdown", handlePointerDown);
    interactiveTarget.addEventListener("pointermove", handlePointerMove);
    interactiveTarget.addEventListener("pointerup", handlePointerUp);
    interactiveTarget.addEventListener("pointercancel", handlePointerUp);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      interactiveTarget.removeEventListener("pointerdown", handlePointerDown);
      interactiveTarget.removeEventListener("pointermove", handlePointerMove);
      interactiveTarget.removeEventListener("pointerup", handlePointerUp);
      interactiveTarget.removeEventListener("pointercancel", handlePointerUp);
      renderer.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.domElement.remove();
    };
  }, []);

  return <div className="bootBackground" ref={mountRef} aria-hidden="true" />;
}
