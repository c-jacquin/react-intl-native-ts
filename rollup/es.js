import typescriptPlugin from 'rollup-plugin-typescript'
import typescript from 'typescript'

export default {
  input: './src/index.ts',
  output: {
    file: './dist/index.es.js',
    format: 'es'
  },
  external: ['react', 'react-intl', 'react-native'],
  plugins: [
    typescriptPlugin({
        typescript,
    }),
  ]
}
