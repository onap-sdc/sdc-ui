const ncp = require('ncp').ncp;
const fs = require('fs');
const path = require('path')
const svgFolder = './assets/icons';
const svgOutputFile = './src/style/scss/common/_icons.scss';

var copyFiles = function() {
    // Copy generated style.css to demo/gen folder
    ncp('lib/css/style.css', 'demo/gen', function (err) {
        if (err) {
            return console.error(err);
        }
    });

    // Copy assets folder to demo/gen folder
    ncp('assets', 'demo/gen/assets', function (err) {
        if (err) {
            return console.error(err);
        }
    });
};

// var parseSvgContent = function(content) {
//     var withoutLines = (content+'').replace(/\n|\t|\r/g, '');
//     return withoutLines.replace(/"/g,'\'');
// };

// var readFile = function(filePath) {
//     return fs.readFileSync(filePath, 'utf8');
// };

// var clearFile = function(filePath) {
//     return fs.truncateSync(filePath, 0);
// };

// var writeFile = function(filePath){
//     const text = `.sdc-icon {
//     display: inline-block;
//     text-rendering: auto;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     width: 16px;
//     height: 16px;
//     }\n`;
//     fs.writeFileSync(filePath, text);
//     console.log("The file was saved!");
// };

// var appendSvgIcons = function(content) {
//     fs.appendFileSync(svgOutputFile, content);
// };

// var readFolder = function(folderPath) {
//     var files = fs.readdirSync(svgFolder);
//     files.forEach(file => {
//         var extension = path.extname(file);
//         if (extension ==='.svg'){
//             console.log(folderPath + "/" + file);
//             var fileContent = readFile(folderPath + "/" + file);
//             var svgContent = parseSvgContent(fileContent);
//             var fileName = path.basename(file, '.svg')
//             var scssContent = '.sdc-icon-' + fileName + ' {background-image: url("data:image/svg+xml;utf8,' + svgContent + '"); background-repeat: no-repeat;}';
//             appendSvgIcons(scssContent+'\n');
//         }
//     });

// };

// Generate icons.scss file from multiple SVG files
// clearFile(svgOutputFile);
// writeFile(svgOutputFile);
// readFolder(svgFolder);
copyFiles();
