import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
const { terser } = require('rollup-plugin-terser');

const extensions = [
    '.js', '.jsx', '.ts', '.tsx',
];

module.exports = {
    input: path.resolve('src/index.js'),
    plugins: [
        resolve({ extensions }),
        commonjs(),
        babel({
            extensions,
            // babelrc: false, // 忽略项目中的babel配置文件，使用此配置
            include: ['src/**/*'],
            // babelHelpers: 'runtime',
        })
    ],
    output: [
        {
            file: 'dist/jszip.js',
            format: 'iife',
            name: 'jszip',
            // https://rollupjs.org/guide/en#output-globals-g-globals
            globals: {},
            plugins: [],
        },
        {
            file: 'dist/jszip.min.js',
            format: 'iife',
            name: 'jszip',
            // https://rollupjs.org/guide/en#output-globals-g-globals
            globals: {},
            plugins: [
                terser(),
            ],
        },
    ],
}
