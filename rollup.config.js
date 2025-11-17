import { readFileSync } from "node:fs";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

const packageJson = JSON.parse(readFileSync("./package.json", "utf8"));

export default [
  // JS + CSS bundle
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        banner: "'use client';\n",
        exports: "named",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        banner: "'use client';\n",
      },
    ],
    plugins: [
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: false,
        declarationMap: false,
      }),

      // Extrae CSS en archivo separado
      postcss({
        config: {
          path: "./postcss.config.cjs",
        },
        extract: "styles.css",
        minimize: true,
        extensions: [".css"],
        inject: false,
      }),

      // Copia las fuentes y variables al dist
      copy({
        targets: [
          { src: "src/fonts/*", dest: "dist/fonts" },
          { src: "src/variables.css", dest: "dist" },
        ],
      }),
    ],

    // ❗ Nada de deps dentro del bundle
    external: [
      ...Object.keys(packageJson.peerDependencies || {}),
      "react",
      "react-dom",
      "react-hot-toast",
      "tailwindcss",
    ],
  },

  // Types bundle
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [
      dts({
        respectExternal: true,
      }),
    ],
    external: [
      /\.css$/,
      ...Object.keys(packageJson.peerDependencies || {}),
    ],
  },
];
