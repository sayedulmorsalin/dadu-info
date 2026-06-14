import { chromium } from "playwright";

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForSelector(".bootBackground canvas");
await page.waitForTimeout(900);

const readPixels = () =>
  page.evaluate(() => {
    const canvas = document.querySelector(".bootBackground canvas");

    if (!(canvas instanceof HTMLCanvasElement)) {
      return [];
    }

    const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl");

    if (!gl) {
      return [];
    }

    const width = gl.drawingBufferWidth;
    const height = gl.drawingBufferHeight;
    const pixels = new Uint8Array(80 * 80 * 4);
    gl.readPixels(
      Math.floor(width * 0.5),
      Math.floor(height * 0.35),
      80,
      80,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      pixels,
    );

    return Array.from(pixels);
  });

const before = await readPixels();
await page.mouse.move(300, 360);
await page.mouse.down();
await page.mouse.move(120, 370, { steps: 18 });
await page.mouse.up();
await page.waitForTimeout(350);
const after = await readPixels();

await browser.close();

let changed = 0;

for (let index = 0; index < Math.min(before.length, after.length); index += 1) {
  if (before[index] !== after[index]) {
    changed += 1;
  }
}

console.log(`changedChannels=${changed}`);

if (changed < 100) {
  process.exitCode = 1;
}
