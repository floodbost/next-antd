/** @type {import('next').NextConfig} */

/*
const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}
*/

const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess({
  reactStrictMode: false,
  // optional
  modifyVars: {
    '@height-base': '38px'
  },
  // optional
  lessVarsFilePath: './styles/App.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack (config) {
    return config
  }
})
