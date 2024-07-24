import { MonorepoTsProject } from "@aws/pdk/monorepo";
import { javascript, Project } from "projen";
import { PythonProject } from "projen/lib/python";

const monorepo = new MonorepoTsProject({
  devDeps: ["@aws/pdk"],
  name: "clever-ai",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "9",
  projenrcTs: true,
  gitignore: [".idea/*"],
  licenseOptions: { disableDefaultLicenses: true },
  licensed: false,
});

monorepo.package.addEngine("pnpm", ">=9");

new PythonProject({
  parent: monorepo,
  authorEmail: "admin@alexwhiteside.dev",
  authorName: "Alex Whiteside",
  moduleName: "clever-ai",
  name: "python",
  outdir: "packages/python",
  version: "0.0.1",
});

new Project({
  parent: monorepo,
  name: "docs",
  outdir: "docs",
});

monorepo.synth();
