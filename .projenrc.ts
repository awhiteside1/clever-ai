import { javascript } from "projen";
import { monorepo } from "@aws/pdk";
const project = new monorepo.MonorepoTsProject({
  devDeps: ["@aws/pdk"],
  name: "clever-ai",
  packageManager: javascript.NodePackageManager.PNPM,
  projenrcTs: true,
});
project.synth();