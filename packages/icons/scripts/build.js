const { transform } = require("@svgr/core");
const fs = require("fs-extra");
const path = require("path");

const ASSETS_DIR = path.resolve(__dirname, "../assets");
const SRC_DIR = path.resolve(__dirname, "../src/react");

async function processFolder(inputDir, outputDir, themeName) {
  if (!(await fs.pathExists(inputDir))) return;

  await fs.ensureDir(outputDir);
  const files = await fs.readdir(inputDir);
  const exports = [];

  for (const file of files) {
    if (path.extname(file) !== ".svg") continue;

    const svg = await fs.readFile(path.join(inputDir, file), "utf8");
    // Home.svg -> Home
    const name =
      path.basename(file, ".svg").charAt(0).toUpperCase() +
      path.basename(file, ".svg").slice(1);

    const componentCode = await transform(
      svg,
      {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        icon: true,
        typescript: true,
        // Ini supaya warnanya bisa diganti lewat props
        svgoConfig: {
          plugins: [{ name: "convertColors", params: { currentColor: true } }],
        },
      },
      { componentName: name },
    );

    await fs.writeFile(path.join(outputDir, `${name}.tsx`), componentCode);
    exports.push(`export * from './${name}';`);
  }

  await fs.writeFile(path.join(outputDir, "index.ts"), exports.join("\n"));
}

async function run() {
  await fs.remove(SRC_DIR);
  const themes = await fs.readdir(ASSETS_DIR);

  for (const theme of themes) {
    const themePath = path.join(ASSETS_DIR, theme);
    if (!(await fs.stat(themePath)).isDirectory()) continue;

    if (theme === "default") {
      // Handle outline & fill
      await processFolder(
        path.join(themePath, "outline"),
        path.join(SRC_DIR, "default/outline"),
      );
      await processFolder(
        path.join(themePath, "solid"),
        path.join(SRC_DIR, "default/fill"),
      );
    } else {
      // Handle custom themes
      await processFolder(themePath, path.join(SRC_DIR, theme));
    }
  }
}

run().catch(console.error);
