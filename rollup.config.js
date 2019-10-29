/* eslint-env node */
const del = require("rollup-plugin-delete");
const resolve = require("rollup-plugin-node-resolve");
const progress = require("rollup-plugin-progress");
const typescript = require("rollup-plugin-typescript2");

const pkg = require("./package.json");

module.exports = {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "es"
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    del({
      targets: ["dist/**/*"],
      verbose: true
    }),
    progress({
      clearLine: false
    }),
    resolve(),
    typescript({
      typescript: require("typescript")
    })
  ]
};