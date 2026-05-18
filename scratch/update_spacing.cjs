const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../src/component');

// 1. HomeAll padding bottom
const homeAllCssPath = path.join(componentsDir, 'HomeAll', 'HomeAll.css');
if (fs.existsSync(homeAllCssPath)) {
  let css = fs.readFileSync(homeAllCssPath, 'utf8');
  css = css.replace(
    /padding:\s*clamp\(70px,\s*10vw,\s*130px\)\s*0\s*clamp\(60px,\s*8vw,\s*110px\);/,
    'padding: clamp(70px, 10vw, 130px) 0 100px;'
  );
  fs.writeFileSync(homeAllCssPath, css, 'utf8');
}

// 2. HomeManufacturing padding top 0, padding bottom 101.36px
const mfgCssPath = path.join(componentsDir, 'HomeManufacturing', 'HomeManufacturing.css');
if (fs.existsSync(mfgCssPath)) {
  let css = fs.readFileSync(mfgCssPath, 'utf8');
  css = css.replace(
    /padding:\s*clamp\(70px,\s*9vw,\s*110px\)\s*0;/,
    'padding: 0 0 101.36px;'
  );
  fs.writeFileSync(mfgCssPath, css, 'utf8');
}

// 3. HomeWorked padding top 0, row gap 39px
const wkdCssPath = path.join(componentsDir, 'HomeWorked', 'HomeWorked.css');
if (fs.existsSync(wkdCssPath)) {
  let css = fs.readFileSync(wkdCssPath, 'utf8');
  css = css.replace(
    /padding:\s*clamp\(70px,\s*9vw,\s*110px\)\s*0;/,
    'padding: 0 0 clamp(70px, 9vw, 110px);'
  );
  
  css = css.replace(
    /\.ts-wkd__rows\s*\{\s*display:\s*flex;\s*flex-direction:\s*column;\s*gap:\s*20px;/m,
    `.ts-wkd__rows {\n  display: flex;\n  flex-direction: column;\n  gap: 39px;`
  );
  fs.writeFileSync(wkdCssPath, css, 'utf8');
}

console.log("Updated spacings!");
