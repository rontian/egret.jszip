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
    input: path.resolve('src/index.ts'),
    plugins: [
        resolve({ extensions }),
        commonjs(),
        babel({
            extensions,
            // babelrc: false, // 忽略项目中的babel配置文件，使用此配置
            include: ['src/**/*'],
            // babelHelpers: 'runtime',
        }),
        copy({
            targets: [
                { src: "typings", dest: "dist" }
            ]
        }),
    ],
    output: [
        {
            file: 'dist/game.common.js',
            format: 'cjs',
        },
        {
            file: 'dist/game.common.min.js',
            format: 'cjs',
            plugins: [
                terser(),
            ],
        },
        {
            file: 'dist/game.es.js',
            format: 'es',
        },
        {
            file: 'dist/game.es.min.js',
            format: 'es',
            plugins: [
                terser(),
            ],
        },
        {
            file: 'dist/game.js',
            format: 'iife',
            name: 'game',
            // https://rollupjs.org/guide/en#output-globals-g-globals
            globals: {},
        },
        {
            file: 'dist/game.min.js',
            format: 'iife',
            name: 'game',
            // https://rollupjs.org/guide/en#output-globals-g-globals
            globals: {},
            plugins: [
                terser(),
            ],
        },
        {
            file: 'dist/game.umd.js',
            format: 'umd',
            name: 'game',
            // https://rollupjs.org/guide/en#output-globals-g-globals
            globals: {},
        },
        {
            file: 'dist/game.umd.min.js',
            format: 'umd',
            name: 'game',
            // https://rollupjs.org/guide/en#output-globals-g-globals
            globals: {},
            plugins: [
                terser(),
            ],
        },
    ],
}
