const { rollup } = require('rollup');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const { uglify } = require('rollup-plugin-uglify');
const strip = require('rollup-plugin-strip');
const livereload = require('gulp-livereload');

async function bundleJS(cb) {
  const bundle = await rollup({
    input: './src/scripts/index.js',
    plugins: [
      commonjs(),
      resolve(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      })
    ]
  });

  await bundle.write({
    file: './dist/bundle.js',
    format: 'umd',
    sourcemap: true
  });

  livereload();
}

async function bundleAndMinifyJS(cb) {
  const bundle = await rollup({
    input: './src/scripts/index.js',
    plugins: [
      commonjs(),
      resolve(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      }),
      uglify(),
      strip()
    ]
  });

  await bundle.write({
    file: './dist/bundle.min.js',
    format: 'umd',
    sourcemap: true
  });

  livereload();
}

exports.prodJS = bundleAndMinifyJS;
exports.devJS = bundleJS;
