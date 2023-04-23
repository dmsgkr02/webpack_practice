//node js 환경에서 동작한다. moudle.exports로 내보내야 한다.
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정, 보통 js 파일로 한다.
  entry: './js/main.js',
  // 결과물(번들)을 반환하는 설정
  output: {
    // path는 node js 에서 요구하는 절대경로가 필요하다
    // path.resolve 는 경로를 합치는 메소드, __dirname는 현재 파일이 있는 경로
    // dist가 default 폴더명이다.
    // path: path.resolve(__dirname, 'dist'),
    // 읽어오는 파일명을 같이 한다.
    // filename: 'main.js',
    // 변경 전 파일을 삭제한다.
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }), 
    new CopyPlugin({
      patterns: [
        { from: 'static'}
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }

}
