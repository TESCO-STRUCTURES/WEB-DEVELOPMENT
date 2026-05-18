const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../src/component');

const targets = [
  { 
    dir: 'HomeEngineered', 
    prefix: 'ts-eng',
    css: `width: 369px;
  height: 363px;
  top: 261px;
  left: 322px;
  opacity: 1;
  border-radius: 80px;
  z-index: 2;`
  },
  { 
    dir: 'HomeTensile', 
    prefix: 'ts-ten',
    css: `width: 369px;
  height: 363px;
  top: 260px;
  left: 622px;
  opacity: 1;
  border-radius: 80px;
  z-index: 2;`
  },
  { 
    dir: 'HomeCivil', 
    prefix: 'ts-civ',
    css: `width: 369px;
  height: 363px;
  top: 261px;
  left: 300px;
  opacity: 1;
  border-radius: 80px;
  z-index: 2;`
  },
  { 
    dir: 'HomeDesign', 
    prefix: 'ts-des',
    css: `width: 369px;
  height: 363px;
  top: 282px;
  left: 646px;
  opacity: 1;
  border-radius: 80px;
  z-index: 2;`
  },
  { 
    dir: 'HomeAll', 
    prefix: 'ts-all',
    css: `width: 369px;
  height: 363px;
  top: 261px;
  left: 300px;
  opacity: 1;
  border-radius: 80px;
  z-index: 2;`
  }
];

targets.forEach(target => {
  const cssPath = path.join(componentsDir, target.dir, `${target.dir}.css`);
  
  if (fs.existsSync(cssPath)) {
    let css = fs.readFileSync(cssPath, 'utf8');

    const card2Regex = new RegExp(`\\.${target.prefix}__card--2\\s*\\{[\\s\\S]*?\\}`, 'm');
    const newCard2 = `.${target.prefix}__card--2 {
  ${target.css}
}`;
    
    if (css.match(card2Regex)) {
      css = css.replace(card2Regex, newCard2);
    } else {
      css += `\n${newCard2}\n`;
    }

    fs.writeFileSync(cssPath, css, 'utf8');
  }
});

console.log("Updated img2 dimensions!");
