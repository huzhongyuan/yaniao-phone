(function() {
  let cssArr = document.getElementsByTagName('script');
  headTitle = cssArr[0].getAttribute('data-title');
  let head = '<header class="aui-bar aui-bar-nav header">雅鸟设计</header>';

  let headStyle =  '<link rel="stylesheet" type="text/css" href="../css/module/aui.css" />' +
  '<link rel="stylesheet" href="./../css/module/header.css">' +
  '<link rel="stylesheet" href="./../css/module/footer.css">' +
  '<link rel="stylesheet" href="./../css/pages/' + headTitle + '.css">' +
  '<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>' +
  '<script src="./../js/module/utils.js"></script>' +
  '<script src="./../js/pages/' + headTitle + '.js"></script>';
  '<script src="./../js/module/md5.js"></script>' +
  document.write(headStyle);
  document.write(head);
})()