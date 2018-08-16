
(function() {
  let cssArr = document.getElementsByTagName('script');
  headTitle = cssArr[0].getAttribute('data-title');
  let head = '<header class="aui-bar aui-bar-nav header"></header>';

  let headStyle =  
    '<meta name="robots" content="all">' + 
    '<meta name="author" content="w3school.com.cn">' + 
    '<link rel="icon" type="image/png" sizes="16x16" href="./../images/home.png">' +
    '<meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>' +
    '<meta name="format-detection" content="telephone=no,email=no,date=no,address=no">' +
    '<meta name="apple-mobile-web-app-capable" content="yes">' +
    '<title>雅鸟设计</title>' +
  '</head>' + 
  '<body>' +
  '<link rel="stylesheet" type="text/css" href="../css/module/aui.css" />' +
  '<link rel="stylesheet" href="./../css/module/header.css">' +
  '<link rel="stylesheet" href="./../css/module/footer.css">' +
  '<link rel="stylesheet" href="./../css/pages/' + headTitle + '.css">' +
  '<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>' +
  '<script src="./../js/lib/jquery-3.1.1.min.js"></script>' +
  '<script src="./../js/module/md5.js"></script>' +
  '<script src="./../js/pages/' + headTitle + '.js"></script>';
  document.write(headStyle);
  document.write(head);


})()