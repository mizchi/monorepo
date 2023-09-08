import path from "node:path";
import { globSync } from "glob";
import Mocha from "mocha";

export function run(
  testsRoot: string,
  cb: (error: any, failures?: number) => void,
): void {
  const mocha = new Mocha({ color: true });
  const files = globSync("**/**.test.js", { cwd: testsRoot });
  for (const f of files) mocha.addFile(path.resolve(testsRoot, f));
  try {
    mocha.run((failures) => {
      cb(null, failures);
    });
  } catch (error) {
    cb(error);
  }
}
