import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/rona-countdown-widget.js',
  output: {
    file: 'dist/rona-countdown-widget.js',
    format: 'iife',
    name: 'RonaCountdownWidget',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),  // <-- This fixes UMD/export issues with @wxcc-desktop/sdk
    terser()
  ]
};