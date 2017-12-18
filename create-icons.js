const fs = require('fs');
const path = require('path');

const svgFolder = './assets/sdc-icons/';
const iconMapFile = './src/angular/utils/iconsMap.ts';

let iconsObject = '';

let iconMapDir = path.dirname(iconMapFile);
if (!fs.existsSync(iconMapDir)) {
    fs.mkdirSync(iconMapDir);
};


fs.readdirSync(svgFolder).forEach(file => {
    let fileName = file.split('.')[0];
    let filePath = svgFolder + file;
    if (fs.existsSync(filePath)) {
        const iconBody = fs.readFileSync(filePath).toString();
        const stringIcon = iconBody.replace(/\s{2,}/g, '');
        iconsObject += "'" + fileName + '\' : \'' + stringIcon + '\', \n';
    }
})

const dataToWrite = 'export const Icons = {' + iconsObject + '};';

fs.writeFileSync(iconMapFile, dataToWrite);

