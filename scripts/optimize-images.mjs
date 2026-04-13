/**
 * Resize + WebP encode for public/images/*.png
 * Run: node scripts/optimize-images.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "public", "images");

const maxWidth = 1600;

const files = fs.readdirSync(dir).filter((f) => f.endsWith(".png"));

for (const f of files) {
  const inputPath = path.join(dir, f);
  const outPath = path.join(dir, f.replace(/\.png$/i, ".webp"));
  const meta = await sharp(inputPath).metadata();
  const width = meta.width && meta.width > maxWidth ? maxWidth : undefined;

  await sharp(inputPath)
    .resize(width ? { width, withoutEnlargement: true } : undefined)
    .webp({ quality: 82, effort: 6 })
    .toFile(outPath);

  fs.unlinkSync(inputPath);
  const before = fs.statSync(outPath).size;
  console.log(`${f} → ${path.basename(outPath)} (${(before / 1024).toFixed(0)} KB)`);
}

console.log("Done. PNGs removed; use .webp paths in site-images.ts.");
