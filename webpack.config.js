const path = require('path')
const HtmlPlungin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // webpack은 js를 진입점으로 사용
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // 어떠한 경로에다가 결과물을 만들어서 내어줄지 명시 (절대경로)
    // path: path.resolve(__dirname, 'dist'),
    // 결과물의 파일의 이름
    // filename: 'main.js',
    // 기존의 만들었던 내용 제거
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
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlungin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        // 만들어놓은 폴더의 이름을 명시
        { from: 'static'}
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}