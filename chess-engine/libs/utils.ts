import { readFileSync, writeFile, writeFileSync } from 'fs';
import { join } from "path";

export function syncWriteFile(filename: string, data: any, options: {flag: "w" | "a+"}) {
  /**
   * flags:
   *  - w = Open file for reading and writing. File is created if not exists
   *  - a+ = Open file for reading and appending. The file is created if not exists
   */
  writeFileSync(join(__dirname, filename), data, options);

  const contents = readFileSync(join(__dirname, filename), 'utf-8');

  return contents;
}

export function sleep(milliseconds: number) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
