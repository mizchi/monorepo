import { resolve } from "node:path";
import { runTests } from "@vscode/test-electron";

const projectPath = resolve(__dirname, "../../");
const extensionDevelopmentPath = projectPath;
const extensionTestsPath = resolve(projectPath, "./_compiled/test");
const testWorkspace = resolve(projectPath, "./_testws");

runTests({
  version: "1.18.1",
  extensionDevelopmentPath,
  extensionTestsPath,
  launchArgs: ["--disable-extensions", testWorkspace],
}).catch(console.error);
