const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../src/component');

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

    // Replace the card--1 block
    const card1Regex = new RegExp(`\\.${target.prefix}__card--1\\s*\\{[\\s\\S]*?\\}`, 'm');
    const newCard1 = `.${target.prefix}__card--1 {
  width: 512px;
  height: 504px;
  top: 190px;
  left: 22px;
  opacity: 1;
  border-radius: 40px;
  z-index: 1;
}`;
    
    css = css.replace(card1Regex, newCard1);
    fs.writeFileSync(cssPath, css, 'utf8');
  }
});

console.log("Updated img1 dimensions!");
