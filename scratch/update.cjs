const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../src/component');

const targets = [
  { dir: 'HomeEngineered', prefix: 'ts-eng', ml: '47px', img2Src: 'homeservice2.svg', swap: false },
  { dir: 'HomeTensile', prefix: 'ts-ten', ml: '71px', img2Src: 'hometensile2.svg', swap: true },
  { dir: 'HomeCivil', prefix: 'ts-civ', ml: '55px', img2Src: 'homecivil2.svg', swap: false },
  { dir: 'HomeDesign', prefix: 'ts-des', ml: '59px', img2Src: 'homedesign2.svg', swap: true },
  { dir: 'HomeAll', prefix: 'ts-all', ml: '55px', img2Src: 'homeall2.svg', swap: false }
];

targets.forEach(target => {
  const jsxPath = path.join(componentsDir, target.dir, `${target.dir}.jsx`);
  const cssPath = path.join(componentsDir, target.dir, `${target.dir}.css`);
  
  if (fs.existsSync(jsxPath)) {
    let jsx = fs.readFileSync(jsxPath, 'utf8');
    
    // Add Image 2 if missing
    if (!jsx.includes(`className="${target.prefix}__card ${target.prefix}__card--2"`)) {
      jsx = jsx.replace(
        new RegExp(`<div className="${target.prefix}__card">([\\s\\S]*?)<\\/div>`, 'm'),
        `<div className="${target.prefix}__card ${target.prefix}__card--1">$1</div>\n          <div className="${target.prefix}__card ${target.prefix}__card--2">\n            <img src={img2} alt="Secondary view" />\n          </div>`
      );
    }
    
    fs.writeFileSync(jsxPath, jsx, 'utf8');
  }

  if (fs.existsSync(cssPath)) {
    let css = fs.readFileSync(cssPath, 'utf8');

    // 1. Watermark font updates
    css = css.replace(
      new RegExp(`\\.${target.prefix}__watermark\\s*\\{[\\s\\S]*?\\}`, 'm'),
      `.${target.prefix}__watermark {
  position: absolute;
  top: clamp(10px, 2vw, 24px);
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  font-size: 128px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  background: linear-gradient(180deg, rgba(11, 31, 58, 0.20) 0%, rgba(11, 31, 58, 0.11) 40%, rgba(11, 31, 58, 0.04) 72%, rgba(11, 31, 58, 0.00) 100%);
  -webkit-background-clip: text;
          background-clip: text;
  -webkit-text-fill-color: transparent;
          color: transparent;
  pointer-events: none;
  user-select: none;
  z-index: 0;
}`
    );

    // 2. Margin Left for Media
    css = css.replace(
      new RegExp(`\\.${target.prefix}__media\\s*\\{[\\s\\S]*?\\}`, 'm'),
      `.${target.prefix}__media {
  position: relative;
  width: 100%;
  aspect-ratio: 5 / 4.6;
  min-height: 460px;
  margin-left: ${target.ml};
}`
    );

    // 3. Image 2 overlap
    css = css.replace(
      new RegExp(`\\.${target.prefix}__card--1\\s*\\{[\\s\\S]*?\\}`, 'm'),
      `.${target.prefix}__card--1 {
  top: 0;
  left: 0;
  width: 70%;
  height: 78%;
  z-index: 1;
}`
    );
    css = css.replace(
      new RegExp(`\\.${target.prefix}__card--2\\s*\\{[\\s\\S]*?\\}`, 'm'),
      `.${target.prefix}__card--2 {
  bottom: 0;
  right: 0;
  width: 60%;
  height: 70%;
  z-index: 2;
  box-shadow: none;
}`
    );

    // Remove any previous order rules
    css = css.replace(new RegExp(`\\.${target.prefix}__media\\s*\\{\\s*order:\\s*\\d+;\\s*\\}`, 'g'), '');
    css = css.replace(new RegExp(`\\.${target.prefix}__copy\\s*\\{\\s*order:\\s*\\d+;\\s*\\}`, 'g'), '');

    fs.writeFileSync(cssPath, css, 'utf8');
  }
});

console.log("Updated components!");
