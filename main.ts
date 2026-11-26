import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I can't make it: I'm already in the pre-meeting for the meeting that replaces this one.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, ENTRY, { encoding: "utf8" });
