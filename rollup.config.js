import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";

import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  external: ["styled-components", "react"],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    commonjs({
      namedExports: {
        "node_modules/react-dates/index.js": [
          "DateRangePicker",
          "SingleDatePicker"
        ]
      }
    })
  ]
};
