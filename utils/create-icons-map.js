const fs = require('fs');
const path = require('path');

const svgFolder = '../assets/icons/';
const iconMapFile = '../src/iconsMap.js';

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
        const cleanedIcon = preparIcon(iconBody, fileName);
        iconsObject += "'" + fileName + '\' : \'' + cleanedIcon + '\', \n';
    }
})

const dataToWrite = 'export const Icons = {' + iconsObject + '};';

fs.writeFileSync(iconMapFile, dataToWrite);

console.log('Icons Map created!');


function preparIcon(icon, iconName){
    let iconLine = icon.replace(/\s{2,}/g, '');
    if(iconLine.match(/(fill=".*")|(id='.*' )|(width=".*")|height=(".*")/g)){
        console.log('Please, check icon: ', iconName);
        iconLine =  iconLine.replace(/(fill=".*")|(id='.*')|width=(".*")|height=(".*")/g, '');
    }
    iconLine = iconLine.replace('<svg', '<svg class = "svg-icon"')
    return iconLine;
}
