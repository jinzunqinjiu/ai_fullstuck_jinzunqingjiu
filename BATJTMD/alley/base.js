//提供一个适配所以机型的rem工具  
//  1. 屏幕宽度
// 2. html
 // 3. fontsize
 //  立即执行函数
 // ipad  
 //  DRY   dont repeat  yourself
 (function () {
 //   html  动态设置font-size
//   函数作用域
//   变量  ，不会被污染外面的
    var htmlElement = document.documentElement
    function getFontsize() {
    var width = document.documentElement.clientWidth//  或者  window.innterwidth
    var fontSize = width / 10
    return fontSize
        }
     htmlElement.style.fontSize = getFontsize() + 'px'
    window.addEventListener('resize', function () {
    htmlElement.documentElement.style.fontSize = getFontsize() + 'px';
    })
    })()