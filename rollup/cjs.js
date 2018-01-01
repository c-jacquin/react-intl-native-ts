import typescriptPlugin from 'rollup-plugin-typescript'
import typescript from 'typescript'

export default {
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'cjs'
  },
  external: ['react', 'react-intl', 'react-native'],
  plugins: [
    typescriptPlugin({
        typescript,
    }),
  ]
}
