import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/rona-countdown-widget.js',
  output: {
    file: 'dist/rona-countdown-widget.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    resolve(),
    terser()
  ]
};
