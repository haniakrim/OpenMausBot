import { rm } from "node:fs/promises";

const generatedPaths = [
  "dist",
  "dist-electron",
  "dist-native",
  "dist-server",
  "release",
  "fe/desktop/electron/resources/speech-helper",
  "fe/desktop/electron/resources/OpenMausBot Speech.app",
];

await Promise.all(
  generatedPaths.map((path) => rm(path, { recursive: true, force: true })),
);
