import type { PlopTypes } from "@turbo/gen";
import { globSync } from "glob";
import path from "node:path";

const copyDirActions = (parentPath: string, templateDir: string) => {
  return globSync("**/*", {
    cwd: path.join(__dirname, templateDir),
    nodir: true,
  }).map((fileName) => {
    const outPath = fileName.replace(/\.hbs$/, "");
    return {
      type: "add",
      path: `${parentPath}/{{name}}/${outPath}`,
      templateFile: `${templateDir}/${fileName}`,
    };
  });
};

const pkgNamePrompt = {
  type: "input",
  name: "name",
  message: "package:name",
  validate(input: string) {
    return /(@[a-zA-Z0-9_-]+\/)?[a-zA-Z0-9_-]+/.test(input)
      ? true
      : "invalid pkg name";
  },
};

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("lib", {
    description: "Generator lib package",
    prompts: [pkgNamePrompt],
    actions: [...copyDirActions("packages", "templates/lib")],
  });
  plop.setGenerator("cli", {
    description: "Generator cli package",
    prompts: [pkgNamePrompt],
    actions: [...copyDirActions("packages", "templates/cli")],
  });
  plop.setGenerator("react", {
    description: "Generator react app",
    prompts: [pkgNamePrompt],
    actions: [...copyDirActions("apps", "templates/react")],
  });
  plop.setGenerator("react-lib", {
    description: "Generator react lib",
    prompts: [pkgNamePrompt],
    actions: [...copyDirActions("packages", "templates/react-lib")],
  });

  plop.setGenerator("cf-worker", {
    description: "Generator cf-worker app",
    prompts: [pkgNamePrompt],
    actions: [...copyDirActions("apps", "templates/cf-worker")],
  });

  // merge with react
  const appPandaFiles = copyDirActions("apps", "templates/panda");
  plop.setGenerator("panda", {
    description: "Generator react with pandacss and radix-ui",
    prompts: [pkgNamePrompt],
    actions: [
      ...copyDirActions("apps", "templates/react").filter((action) => {
        return !appPandaFiles.some((file) => file.path === action.path);
      }),
      ...appPandaFiles,
    ],
  });
}
