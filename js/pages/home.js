window.onload = function () {
  var slide = new auiSlide({
    container:document.getElementById("aui-slide"),
    //"width":300,
    "height":140,
    "speed":300,
    "autoPlay": 3000, //自动播放
    "pageShow":true,
    "pageStyle":'dot',
    "loop":true,
    'dotPosition':'center',
    currentPage:currentFun
})
function currentFun(index) {
    console.log(index);
}
}