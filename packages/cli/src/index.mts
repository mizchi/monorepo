import { parseArgs } from "node:util";

const args = parseArgs({
  allowPositionals: true,
  options: {
    help: {
      type: "boolean",
      alias: "h",
      description: "Show help",
    },
    name: {
      type: "string",
      alias: "n",
      description: "Name of the project",
      default: "name",
    },
  },
});

console.log(args);
