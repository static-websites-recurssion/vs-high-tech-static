/**
 * Generates the 1200×630 Open Graph / Twitter card at
 * public/images/og/og-default.jpg.
 *
 * Run: npm run og
 *
 * Drawn entirely from an inline SVG in brand colours — no network font, no
 * remote image, so the card is reproducible on any machine.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = resolve(ROOT, "public/images/og/og-default.jpg");

const W = 1200;
const H = 630;

const NAVY = "#0a1430";
const NAVY_2 = "#152a5e";
const GOLD = "#e0b64a";
const SKY = "#bcd6ff";

function esc(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const overlay = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${NAVY}"/>
      <stop offset="60%" stop-color="${NAVY_2}"/>
      <stop offset="100%" stop-color="${NAVY}"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- gold rule -->
  <rect x="0" y="0" width="${W}" height="8" fill="${GOLD}"/>

  <g font-family="Helvetica Neue, Helvetica, Arial, sans-serif">
    <text x="72" y="150" fill="${SKY}" font-size="24" letter-spacing="4.5" font-weight="600">
      ${esc("HYDERABAD · VIJAYAWADA · BANGALORE")}
    </text>

    <text x="72" y="245" fill="#ffffff" font-size="62" font-weight="700">
      ${esc("V.S. Hitech Security Forms")}
    </text>

    <text x="72" y="325" fill="${SKY}" font-size="38" font-weight="500">
      ${esc("Confidential security printing since 1997")}
    </text>

    <text x="72" y="398" fill="#dbe7ff" font-size="27" font-weight="400">
      ${esc("Question papers · OMR sheets · Certificates · Variable data")}
    </text>

    <g transform="translate(72, 452)">
      ${["ISO 9001", "ISO 27001", "ISO 14001", "ISO 20000-1"]
        .map((code, i) => {
          const x = i * 190;
          return `<rect x="${x}" y="0" width="172" height="52" rx="26" fill="none" stroke="${GOLD}" stroke-opacity="0.7" stroke-width="2"/>
      <text x="${x + 86}" y="34" fill="${GOLD}" font-size="23" font-weight="600" text-anchor="middle">${code}</text>`;
        })
        .join("\n      ")}
    </g>

    <text x="72" y="576" fill="#8fb0e8" font-size="24" font-weight="500">
      ${esc("vshitechsecurityforms.com")}
    </text>
  </g>
</svg>`;

async function main() {
  await mkdir(dirname(OUT), { recursive: true });

  const buffer = await sharp({
    create: {
      width: W,
      height: H,
      channels: 4,
      background: NAVY,
    },
  })
    .composite([{ input: Buffer.from(overlay), left: 0, top: 0 }])
    .jpeg({ quality: 86, mozjpeg: true })
    .toBuffer();

  await writeFile(OUT, buffer);

  const { width, height, size } = await sharp(buffer).metadata();
  console.log(
    `og-default.jpg → ${width}×${height}, ${(size / 1024).toFixed(0)} KB`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
