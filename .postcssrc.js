// ESM - (improt, export 키워드를 사용하는 방식)
// node.js 에서는 CommonJS 방식을 사용

// import 대신 require() 방식으로 js파일을 외부에서 가져옴
// export 대신 module.exports 방식으로 내용들을 내보내기 

module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}