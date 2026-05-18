const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../src/component');
const color = '#343C47';

const targets = [
  { dir: 'HomeEngineered', prefix: 'ts-eng' },
  { dir: 'HomeTensile', prefix: 'ts-ten' },
  { dir: 'HomeCivil', prefix: 'ts-civ' },
  { dir: 'HomeDesign', prefix: 'ts-des' },
  { dir: 'HomeAll', prefix: 'ts-all' }
];

targets.forEach(target => {
  const cssPath = path.join(componentsDir, target.dir, `${target.dir}.css`);
  
  if (fs.existsSync(cssPath)) {
    let css = fs.readFileSync(cssPath, 'utf8');

    // Replace color in __subtitle
    css = css.replace(
      new RegExp(`(\\.${target.prefix}__subtitle\\s*\\{[\\s\\S]*?color:\\s*)[^;]+(;[\\s\\S]*?\\})`, 'g'),
      `$1${color}$2`
    );

    // Replace color in __desc
    css = css.replace(
      new RegExp(`(\\.${target.prefix}__desc\\s*\\{[\\s\\S]*?color:\\s*)[^;]+(;[\\s\\S]*?\\})`, 'g'),
      `$1${color}$2`
    );

    fs.writeFileSync(cssPath, css, 'utf8');
  }
});

console.log("Updated colors!");
