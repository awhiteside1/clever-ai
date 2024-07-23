import { javascript } from "projen";
import { monorepo } from "@aws/pdk";
const project = new monorepo.MonorepoTsProject({
  devDeps: ["@aws/pdk"],
  name: "clever-ai",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion:'>=9',
  projenrcTs: true,
  gitignore:['.idea/'],
  licenseOptions:{disableDefaultLicenses:true},
  licensed:false
});

project.package.addEngine('pnpm', '>9')
project.synth();