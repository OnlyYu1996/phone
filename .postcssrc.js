// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    'postcss-px-to-viewport':{
      viewportWidth:720,//视窗可视区域宽（设计稿的宽度）
      viewportUnit:'vmin',//默认以哪一条边为主做计算（vmin是以最小的边为计算，vmax是以最大的边为计算）
    }
  }
}
