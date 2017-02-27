#!/usr/bin/env node

const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');

return Promise.all([
  imagemin(['src/img/*.{jpg,png}'], 'public/img', {
    plugins: [
      imageminMozjpeg(),
      imageminPngquant({quality: '65-80'})
    ]
  }),
  imagemin(['src/img/*.svg'], 'public/img', {
    use: [
      imageminSvgo()
    ]
  })
]);
