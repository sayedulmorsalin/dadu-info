import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const viewports = [
  { name: "desktop", width: 1365, height: 768 },
  { name: "mobile", width: 390, height: 844 },
];

await mkdir("verification", { recursive: true });

const browser = await chromium.launch({ channel: "chrome" });
const results = [];

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForSelector(".bootBackground canvas");
  await page.waitForTimeout(1200);

  const pixelStats = await page.evaluate(() => {
    const canvas = document.querySelector(".bootBackground canvas");

    if (!(canvas instanceof HTMLCanvasElement)) {
      return { hasCanvas: false, coloredPixels: 0, sampledPixels: 0 };
    }

    const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl");

    if (!gl) {
      return { hasCanvas: true, coloredPixels: 0, sampledPixels: 0 };
    }

    const width = gl.drawingBufferWidth;
    const height = gl.drawingBufferHeight;
    const sampleWidth = Math.max(1, Math.floor(width / 4));
    const sampleHeight = Math.max(1, Math.floor(height / 4));
    const x = Math.max(0, Math.floor(width * 0.55));
    const y = Math.max(0, Math.floor(height * 0.32));
    const pixels = new Uint8Array(sampleWidth * sampleHeight * 4);

    gl.readPixels(x, y, sampleWidth, sampleHeight, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

    let coloredPixels = 0;

    for (let index = 0; index < pixels.length; index += 4) {
      const red = pixels[index];
      const green = pixels[index + 1];
      const blue = pixels[index + 2];
      const alpha = pixels[index + 3];

      if (alpha > 0 && red + green + blue > 24) {
        coloredPixels += 1;
      }
    }

    return {
      hasCanvas: true,
      coloredPixels,
      sampledPixels: pixels.length / 4,
    };
  });

  await page.screenshot({
    path: `verification/dadu-3d-${viewport.name}.png`,
    fullPage: false,
  });

  results.push({ viewport: viewport.name, ...pixelStats });
  await page.close();
}

await browser.close();

for (const result of results) {
  const ratio = result.sampledPixels
    ? `${Math.round((result.coloredPixels / result.sampledPixels) * 100)}%`
    : "0%";

  console.log(
    `${result.viewport}: canvas=${result.hasCanvas} colored=${result.coloredPixels}/${result.sampledPixels} (${ratio})`,
  );
}

if (results.some((result) => !result.hasCanvas || result.coloredPixels < 100)) {
  process.exitCode = 1;
}
