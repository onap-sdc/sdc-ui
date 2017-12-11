export default {
    input: './build/angular/index.js',
    output: {
        file: './lib/angular/index.js',
        format: 'es',
        exports: 'named',
    },
    name: 'sdcUiAngular',
    external: [
        '@angular/core',
        '@angular/common',
        '@angular/forms'
    ]
};
