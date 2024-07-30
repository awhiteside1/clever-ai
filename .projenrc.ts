import { MonorepoTsProject } from "@aws/pdk/monorepo";
import { javascript, Project } from "projen";
import { NodePackageManager, NodeProject, TypescriptConfig, TypescriptConfigExtends } from "projen/lib/javascript";
import { PythonProject } from "projen/lib/python";


// @ts-ignore
const monorepo = new MonorepoTsProject({
  devDeps: ["@aws/pdk", "prettier-plugin-tailwindcss"],
  deps: [
    "@headlessui/react",
    "@headlessui/tailwindcss",
    "@tailwindcss/forms",
    "@types/node",
    "@types/react",
    "@types/react-dom",
    "radash",
    "resend",
    "autoprefixer",
    "clsx",
    "framer-motion",
    "next",
    "react",
    "@vercel/analytics",
    "@vercel/analytics",
    "react-dom",
    "tailwindcss",
    "typescript",
    "use-debounce"
  ],
  name: "clever-ai",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "9",
  eslint: false,
  prettierOptions: {
    settings: { semi: false, singleQuote: true },
    ignoreFileOptions: {
      ignorePatterns: [
        "**/.venv/**",
        "**/project.json",
        "**/nx.json",
        "**/package.json",
        "**/tsconfig*",
        ".*"
      ]
    }
  },
  projenrcTs: true,
  gitignore: [".idea/", "**/.DS_Store", "**/.next/", ".env"],
  licenseOptions: { disableDefaultLicenses: true },
  licensed: false,
  tsconfig: {
    compilerOptions: {
      "outDir": "${configDir}/lib",
      //@ts-ignore
      "composite": true,
      "incremental": true,
      "declaration": true,
      "declarationMap": true,
      "customConditions": ["@workspace"]
    },
    "exclude": ["${configDir}/lib"]
  }
});

monorepo.package.addEngine("pnpm", ">=9");

new PythonProject({
  parent: monorepo,
  venv: true,
  venvOptions: {
    envdir: ".venv"
  },
  authorEmail: "admin@alexwhiteside.dev",
  authorName: "Alex Whiteside",
  moduleName: "clever-ai",
  name: "python",
  outdir: "packages/python",
  version: "0.0.1",
  deps: ["ollama", "lancedb", "pandas"]
});

new Project({
  parent: monorepo,
  name: "docs",
  outdir: "docs"
});

const framework = new NodeProject({
  parent: monorepo,
  jest: false,
  npmignoreEnabled: false,
  licensed: false,
  name: "framework",
  packageName: "@workspace/framework",
  outdir: "packages/framework",
  packageManager: NodePackageManager.PNPM,
  defaultReleaseBranch: "main"
});

const platform = new NodeProject({
  parent: monorepo,
  jest: false,
  npmignoreEnabled: false,
  licensed: false,
  name: "platform",
  outdir: "packages/platform",
  packageManager: NodePackageManager.PNPM,
  defaultReleaseBranch: "main"
});

const www = new NodeProject({
  parent: monorepo,
  jest: false,
  npmignoreEnabled: false,
  licensed: false,
  gitignore: [".next/**"],
  name: "www",
  outdir: "apps/www",
  packageManager: NodePackageManager.PNPM,
  defaultReleaseBranch: "main"
});

www.compileTask.reset("pnpm next build");
www.addTask("dev", { exec: "pnpm next dev" });


const setupTypescript = (project: NodeProject) => {

  project.package.file.addOverride("exports", {
    "*": {
      "import": {
        "@workspace": "./src/index.ts", // must be first, order matters!
        "default": "./lib/index.js",
        "types": "./lib/index.d.ts"
      },
      "require": {
        "@workspace/source": "./src/index.ts",
        "default": "./lib/index.cjs",
        "types": "./lib/index.d.ts"
      }
    }
  });
  new TypescriptConfig(project, { extends: TypescriptConfigExtends.fromPaths(["../../tsconfig.json"]) });

};

setupTypescript(framework);
setupTypescript(platform);

monorepo.synth();
