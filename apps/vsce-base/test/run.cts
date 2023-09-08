import { resolve } from "node:path";
import { runTests } from "@vscode/test-electron";

// it' compiled to ./_compiled/test/run.cjs
const projectPath = resolve(__dirname, "../../");
const extensionDevelopmentPath = projectPath;
const extensionTestsPath = resolve(projectPath, "./_compiled/test");
const testWorkspace = resolve(projectPath, "./fixtures/ws1");

runTests({
  version: "insiders",
  extensionDevelopmentPath,
  extensionTestsPath,
  launchArgs: ["--disable-extensions", testWorkspace],
}).catch((error) => {
  console.error("Failed to run tests", error);
  process.exit(1);
});
