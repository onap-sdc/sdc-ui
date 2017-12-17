export default {
    input: './build/angular/index.js',
    output: {
        file: './lib/angular/index.umd.js',
        format: 'umd',
        exports: 'named',
    },
    name: 'sdcUiAngular',
    external: [
        '@angular/core',
        '@angular/common',
        '@angular/forms'
    ],
    globals: {
        '@angular/core': 'ngCore',
        '@angular/common': 'ngCommon',
        '@angular/forms': 'ngForms'
    }
};
