import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser'; // 不用解构出来 有默认导出

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'es'
    },
    {
      file: 'dist/bundle.min.js',
      format: 'iife',
      name: 'anyFormat'
    }
  ],
  external: [],
  plugins: [
    resolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectories: ['node_modules']
      }
    }),
    babel({ babelHelpers: 'bundled' }),
    terser()
  ]
};
