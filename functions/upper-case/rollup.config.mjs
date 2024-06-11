import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const config = [
  {
    input: 'build/index.js',
    output: {
      file: 'index.js',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [typescript(), resolve(), commonjs()],
  },
];
export default config;
