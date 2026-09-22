#!/usr/bin/env node
/**
 * One-shot optimizer for public/photos.
 * - Longest edge ≤ 1920px
 * - JPEG quality 80 (mozjpeg), strip metadata
 * - PNGs → sibling .jpg, then delete the .png
 * - Skips files already ≤ 1920 on both edges and < 400KB
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PHOTOS_DIR = path.join(ROOT, "public", "photos");
const MAX_EDGE = 1920;
const QUALITY = 80;
const SKIP_MAX_BYTES = 400 * 1024;
const EXT_RE = /\.(jpe?g|png)$/i;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (EXT_RE.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function formatBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

async function optimizeFile(filePath) {
  const rel = path.relative(ROOT, filePath);
  const stat = await fs.stat(filePath);
  const before = stat.size;
  const ext = path.extname(filePath).toLowerCase();
  const isPng = ext === ".png";

  const image = sharp(filePath, { failOn: "none" });
  const meta = await image.metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;

  if (!isPng && width <= MAX_EDGE && height <= MAX_EDGE && before < SKIP_MAX_BYTES) {
    console.log(`skip  ${rel} (${formatBytes(before)}, ${width}x${height})`);
    return { before, after: before, skipped: true };
  }

  const needsResize = width > MAX_EDGE || height > MAX_EDGE;
  let pipeline = sharp(filePath, { failOn: "none" }).rotate();
  if (needsResize) {
    pipeline = pipeline.resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  const jpegBuffer = await pipeline
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toBuffer();

  const outPath = isPng
    ? filePath.replace(/\.png$/i, ".jpg")
    : filePath;

  await fs.writeFile(outPath, jpegBuffer);
  if (isPng) {
    await fs.unlink(filePath);
  }

  const after = jpegBuffer.length;
  const label = isPng ? `${rel} → ${path.relative(ROOT, outPath)}` : rel;
  console.log(
    `ok    ${label}  ${formatBytes(before)} → ${formatBytes(after)}  (${width}x${height}${needsResize ? ` → ≤${MAX_EDGE}` : ""})`
  );
  return { before, after, skipped: false };
}

async function main() {
  const files = await walk(PHOTOS_DIR);
  let totalBefore = 0;
  let totalAfter = 0;
  let optimized = 0;
  let skipped = 0;

  console.log(`Optimizing ${files.length} files in ${path.relative(ROOT, PHOTOS_DIR)}...\n`);

  for (const file of files.sort()) {
    const result = await optimizeFile(file);
    totalBefore += result.before;
    totalAfter += result.after;
    if (result.skipped) skipped += 1;
    else optimized += 1;
  }

  console.log(
    `\nDone. ${optimized} optimized, ${skipped} skipped.\n` +
      `Total: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)} ` +
      `(saved ${formatBytes(totalBefore - totalAfter)})`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
