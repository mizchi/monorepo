import type { PlopTypes } from "@turbo/gen";

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
    actions: [
      {
        type: "addMany",
        destination: "packages/{{name}}",
        base: "templates/lib",
        templateFiles: "templates/lib/**/*",
        stripExtensions: ["hbs"],
        verbose: true,
      },
    ],
  });
  plop.setGenerator("cli", {
    description: "Generator cli package",
    prompts: [pkgNamePrompt],
    actions: [
      {
        type: "addMany",
        destination: "packages/{{name}}",
        base: "templates/cli",
        templateFiles: "templates/cli/**/*",
        stripExtensions: ["hbs"],
        verbose: true,
      },
    ],
  });
  plop.setGenerator("react", {
    description: "Generator react app",
    prompts: [pkgNamePrompt],
    actions: [
      {
        type: "addMany",
        destination: "apps/{{name}}",
        base: "templates/react",
        templateFiles: "templates/react/**/*",
        stripExtensions: ["hbs"],
        verbose: true,
      },
    ],
  });
  plop.setGenerator("react-lib", {
    description: "Generator react lib",
    prompts: [pkgNamePrompt],
    actions: [
      {
        type: "addMany",
        destination: "packages/{{name}}",
        base: "templates/react-lib",
        templateFiles: "templates/react-lib/**/*",
        stripExtensions: ["hbs"],
        verbose: true,
      },
    ],
  });

  plop.setGenerator("cf-worker", {
    description: "Generator cf-worker app",
    prompts: [pkgNamePrompt],
    actions: [
      {
        type: "addMany",
        destination: "apps/{{name}}",
        base: "templates/cf-worker",
        templateFiles: "templates/cf-worker/**/*",
        stripExtensions: ["hbs"],
        verbose: true,
      },
    ],
  });

  plop.setGenerator("panda", {
    description: "Generator react with pandacss and radix-ui",
    prompts: [pkgNamePrompt],
    actions: [
      {
        type: "addMany",
        destination: "apps/{{name}}",
        base: "templates/panda",
        templateFiles: "templates/panda/**/*",
        stripExtensions: ["hbs"],
        verbose: true,
      },
    ],
  });
}
