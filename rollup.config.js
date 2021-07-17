import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import compiler from '@ampproject/rollup-plugin-closure-compiler';
import copy from 'rollup-plugin-copy'

const packageJson = require("./package.json");

export default {
    input: "src/index.js",
    output: [
        {
            file: packageJson.main,
            format: "cjs"
        },
        {
            file: packageJson.module,
            format: "esm"
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({useTsconfigDeclarationDir: true}),
        postcss({
            modules: true,
            use: ["sass"]
        }),
        copy({
            targets: [
                {src: 'src/sass', dest: 'lib'},
            ]
        }),
        /* other stuff */
        compiler(),
    ],
};
