const fs = require('fs');
const path = require('path');
const svgFolder = '../assets/icons/';
const iconMapFile = '../src/iconsMap.json';
const svgCleaner = new RegExp('("fill:.*;")|(fill=".*")|(id=\'.*\' )|(width=".*")|height=(".*")', 'g');
let iconsObject = {};

let iconMapDir = path.dirname(iconMapFile);
if (!fs.existsSync(iconMapDir)) {
    fs.mkdirSync(iconMapDir);
};



fs.readdirSync(svgFolder).forEach(file => {
    let fileName = file.split('.')[0];
    let filePath = svgFolder + file;
    if (fs.existsSync(filePath)) {
        const iconBody = fs.readFileSync(filePath).toString();
        let cleanedIcon = preparIcon(iconBody, fileName);
        iconsObject[fileName] = cleanedIcon;
    }
})

const dataToWrite = JSON.stringify(iconsObject);

fs.writeFileSync(iconMapFile, dataToWrite);

console.log('Icons Map created!');


function preparIcon(iconLine, iconName){
    if(iconLine.match(svgCleaner)){
        console.log('Please, check icon: ', iconName, ', Count of errors: ', iconLine.match(svgCleaner).length);
        iconLine =  iconLine.replace(svgCleaner, '');
    }
    iconLine = iconLine.replace('<svg', '<svg class = "svg-icon"');
    return iconLine;
}
