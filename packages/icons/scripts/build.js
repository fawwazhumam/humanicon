const { transform } = require('@svgr/core');
const fs = require('fs-extra');
const path = require('path');

// --- KONFIGURASI PATH ---
const rootDir = path.resolve(__dirname, '..');
const svgBaseDir = path.join(rootDir, 'src/svg');
const reactOutDir = path.join(rootDir, 'src/react');

// Bersihkan folder output
fs.emptyDirSync(reactOutDir);

// Template React Component
const componentTemplate = ({ componentName, jsx }, { tpl }) => {
  return tpl`
    import * as React from "react";
    import type { SVGProps } from "react";
    
    const ${componentName} = (props: SVGProps<SVGSVGElement>) => (
      ${jsx}
    );
    
    export default ${componentName};
  `;
};

// Helper: kebab-case to PascalCase
const toPascalCase = (str) => 
  str.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');

async function buildIcons() {
  console.log('Generate Humanicon (Mode: All/Namespace)...');
  
  const styles = ['outline', 'solid'];
  let indexContent = '';
  let count = 0;

  for (const style of styles) {
    const styleDir = path.join(svgBaseDir, style);
    
    if (!fs.existsSync(styleDir)) {
      console.warn(`⚠️ Folder ${style} tidak ditemukan, skipping...`);
      continue;
    }

    const files = await fs.readdir(styleDir);
    const svgFiles = files.filter(file => file.endsWith('.svg'));

    console.log(`📂 Processing ${style}: ${svgFiles.length} icons`);

    for (const file of svgFiles) {
      const originalName = file.replace('.svg', '');
      const pascalName = toPascalCase(originalName);
      
      // --- LOGIKA PENAMAAN BARU ---
      // 1. Outline -> Polos (contoh: 'User')
      // 2. Solid   -> Pakai akhiran 'Fill' (contoh: 'UserFill')
      let suffix = '';
      if (style === 'solid') {
        suffix = 'Fill';
      }
      
      const componentName = `${pascalName}${suffix}`;
      
      // Baca File SVG
      const svgCode = await fs.readFile(path.join(styleDir, file), 'utf8');

      // Transformasi SVG ke React Code
      const jsCode = await transform(
        svgCode,
        {
          typescript: true,
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
          icon: true,
          template: componentTemplate,
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                  },
                },
              },
              {
                name: 'convertColors', 
                params: { currentColor: true },
              }
            ],
          },
        },
        { componentName }
      );

      // Tulis file .tsx
      await fs.outputFile(path.join(reactOutDir, `${componentName}.tsx`), jsCode);
      
      // Tambahkan ke index export
      indexContent += `export { default as ${componentName} } from './${componentName}';\n`;
      count++;
    }
  }

  // Tulis file index.ts utama
  await fs.outputFile(path.join(reactOutDir, 'index.ts'), indexContent);
  console.log(`✨ Selesai! Total ${count} varian icon siap digunakan.`);
}

buildIcons();