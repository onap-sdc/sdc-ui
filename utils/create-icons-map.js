const fs = require('fs');
const path = require('path');
const svgFolder = '../assets/icons/';
const iconMapFile = '../src/common/iconsMap.json';
const disallowedSvgAttributes = ['fill', 'id', 'width', 'height'];
const disallowedSvgStyle = ['fill'];
const disallowedSvgInlineAttributes = ['fill', 'id'];
const disallowedSvgInlineStyle = ['fill'];

function _escapeStrRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function _makeSvgAttributesRegex(attrs) {
    return new RegExp(`\s*(${attrs.map(_escapeStrRegex).join('|')})\s*=\s*("|')[^"']*\\2`, 'g');
}
function _makeSvgStyleRegex(attrs) {
    return new RegExp(`\s*${attrs.map(_escapeStrRegex).join('|')}\s*:[^'";]*;?`, 'g');
}

// prepare
const disallowedSvgAttributesRegex = _makeSvgAttributesRegex(disallowedSvgAttributes);
const disallowedSvgStyleRegex = _makeSvgStyleRegex(disallowedSvgStyle);
const disallowedSvgInlineAttributesRegex = _makeSvgAttributesRegex(disallowedSvgInlineAttributes);
const disallowedSvgInlineStyleRegex = _makeSvgStyleRegex(disallowedSvgInlineStyle);

function addIcon(iconsObject, iconName, iconPath) {
    let iconContent = fs.readFileSync(iconPath).toString();
    if (!iconContent) {
        return;
    }

    // clean the first <svg> tag
    iconContent = iconContent.replace(/<svg\b[^>]*>/, (svgTag) => {
        let cleanedNum = 0;
        const disallowedSvgAttributesMatch = svgTag.match(disallowedSvgAttributesRegex);
        if (disallowedSvgAttributesMatch) {
            svgTag = svgTag.replace(disallowedSvgAttributesRegex, '');
            cleanedNum += disallowedSvgAttributesMatch.length;
        }
        const disallowedSvgStyleMatch = svgTag.match(disallowedSvgStyleRegex);
        if (disallowedSvgStyleMatch) {
            svgTag = svgTag.replace(disallowedSvgStyleRegex, '');
            cleanedNum += disallowedSvgStyleMatch.length;
        }
        if (cleanedNum > 0) {
            console.log(`# ${iconName}: Cleaned ${cleanedNum} attributes and styles.`);
        }
        return svgTag;
    });

    const disallowedSvgInlineAttributesMatch = iconContent.match(disallowedSvgInlineAttributesRegex);
    if (disallowedSvgInlineAttributesMatch) {
        console.log(`*** ${iconName}: CHECK for ${disallowedSvgInlineAttributesMatch.length} inline attributes [${disallowedSvgInlineAttributes.join(', ')}]`);
    }
    const disallowedSvgInlineStyleMatch = iconContent.match(disallowedSvgInlineStyleRegex);
    if (disallowedSvgInlineStyleMatch) {
        console.log(`*** ${iconName}: CHECK for ${disallowedSvgInlineStyleMatch.length} inline styles [${disallowedSvgInlineStyle.join(', ')}]`);
    }

    iconsObject[iconName] = iconContent;
}

function main() {
    const iconMapDir = path.dirname(iconMapFile);
    if (!fs.existsSync(iconMapDir)) {
        console.log('creating!');
        fs.mkdirSync(iconMapDir);
    }

    const iconsObject = {};
    fs.readdirSync(svgFolder).forEach((file) => {
        const fileName = file.split('.', 2)[0];
        const filePath = svgFolder + file;
        if (fs.existsSync(filePath)) {
            addIcon(iconsObject, fileName, filePath);
        }
    });

    const dataToWrite = JSON.stringify(iconsObject);

    fs.writeFileSync(iconMapFile, dataToWrite);

    console.log(`Icons Map JSON created! [${iconMapFile}]`);
}

main();
