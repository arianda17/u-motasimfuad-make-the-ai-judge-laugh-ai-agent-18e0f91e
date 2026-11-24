import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Every time I say 'let me look that up' I'm actually just improvising and hoping you don't ask for a source.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);