const path = require('path');
const fs = require('fs');
const webfont = require('webfont').default;

// configure webfont:
const iconExtension = '.svg';
const iconsMainDir = './assets/font-icons/';
const destFonts = './assets/fonts/icons';
const destStyles = './scss/custom-fonts';
const webfontOptionsDefault = {
    template: 'css',
    normalize: true,
    formats: ['woff2', 'woff', 'ttf', 'eot', 'svg'],
    cssTemplateClassName: 'i',
    cssTemplateFontPath: '/fonts/icons/'
};

// path to write font icons map file:
const destFontIconsMapFile = './src/font-icons-map.ts';


function initializeDir(dir) {
    let curDir;
    dir.split('/').forEach((subDir) => {
        curDir = curDir === undefined ? subDir : `${curDir}/${subDir}`;
        try {
            fs.statSync(curDir);
        } catch (exc) {
            fs.mkdirSync(curDir);
        }
    });
    fs.readdirSync(dir).forEach((fname) => {
        const file = `${dir}/${fname}`;
        if (fs.statSync(file).isFile()) {
            fs.unlinkSync(file);
        }
    });
}

function writeFontIconsMapFile(destPath, iconsMap) {
    let dataToWrite = '';
    dataToWrite += 'export default {';
    dataToWrite += Object.keys(iconsMap).map((category) =>
        `\n    '${category}': [${iconsMap[category].map((name) => `\n        '${name}'`).join(',')}\n    ]`);
    dataToWrite += '\n};\n';

    fs.writeFileSync(destPath, dataToWrite);
}

function buildFontIcons(iconsCategory, webfontOptions) {
    webfontOptions = webfontOptions !== undefined ? webfontOptions : {};

    const iconsDir = `${iconsMainDir}/${iconsCategory}`;
    const options = Object.assign({}, webfontOptionsDefault, webfontOptions, {
        files: `${iconsDir}/**/*${iconExtension}`,
        fontName: `font-icons-${iconsCategory}`,
        cssTemplateClassName: `${webfontOptionsDefault.cssTemplateClassName}-${iconsCategory}`
    });

    return webfont(options).then(
        (result) => {
            Object.assign(result.config, {
                iconsDir,
                iconsCategory
            });
            return result;
        },
        (error) => {
            console.log(`Build font icons in "${iconsDir}"... FAIL!`);
            console.log('\t', error);
            throw error;
        }
    );
}

Promise.all(fs.readdirSync(iconsMainDir).map((dirname) => buildFontIcons(dirname))).then(
    (results) => {
        initializeDir(destFonts);
        initializeDir(destStyles);

        const fontIconsMap = {};

        results.forEach((result) => {
            result.config.formats.forEach((fontFormat) => {
                fs.writeFileSync(`${destFonts}/${result.config.fontName}.${fontFormat}`, result[fontFormat]);
            });

            fs.writeFileSync(`${destStyles}/${result.config.iconsCategory}.css`, result.styles);

            fontIconsMap[result.config.iconsCategory] = result.config.foundFiles.map((filePath) => {
                const fileName = path.basename(filePath);
                return fileName.substr(0, fileName.length - iconExtension.length);
            });

            console.log(`Build font icons in "${result.config.iconsDir}"... OK! (${fontIconsMap[result.config.iconsCategory].length} ${iconExtension} icons)`);
        });

        writeFontIconsMapFile(destFontIconsMapFile, fontIconsMap);
    }
);
