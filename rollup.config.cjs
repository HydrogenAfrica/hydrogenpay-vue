import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'

export default [
  {
    input: 'src/hydrogenpay.vue',
    output: [
      {
        format: 'esm',
        file: 'dist/hydrogenpay-vue3.mjs'
      },
    ],
    plugins: [
      peerDepsExternal(), css(), vue({ css: false })
    ]
  }
]