import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import packageJSON from "./package.json";

const input = "./components";
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, ".min.js");

export default [
  // ES
  {
    input,
    output: {
      file: packageJSON.module,
      format: "es",
      sourcemap: true,
      exports: "named"
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      commonjs()
    ]
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.module),
      format: "es",
      sourcemap: true,
      exports: "named"
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      commonjs(),
      terser()
    ]
  }
];