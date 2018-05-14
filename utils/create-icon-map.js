
const fs = require('fs');
const path = require('path');

const svgFolder = './assets/icons/';
const iconMapFile = './src/react/utils/iconMap.js';

let dataToWrite = '';
let iconNames = [];

let iconMapDir = path.dirname(iconMapFile);
if (!fs.existsSync(iconMapDir)) {
    fs.mkdirSync(iconMapDir);
};

fs.readdirSync(svgFolder).forEach(file => {
    let fileName = file.split('.');
    if (fileName[0] && fileName[1] === 'svg') {
        dataToWrite += `import ${fileName[0]} from '-!svg-react-loader!../../.${svgFolder}${file}';\n`;
        iconNames.push(fileName[0]);
    }
});

dataToWrite += '\n' + `export default {\n\t${iconNames.join(',\n\t')}\n};`;

fs.writeFileSync(iconMapFile, dataToWrite);
