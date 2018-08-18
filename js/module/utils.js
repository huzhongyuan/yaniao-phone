//将时间戳转化为日期格式
function timestampToTime(timestamp) {
  var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  Y = date.getFullYear() + '-';
  M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  D = date.getDate() + ' ';
  h = date.getHours() + ':';
  m = date.getMinutes() + ':';
  s = date.getSeconds();
  return Y + M + D + h + m + s;
}
//获取url参数
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}

//匹配富文本之间的文本
let march = (s) => {
  var dd = s.replace(/<\/?.+?>/g, "");
  var dds = dd.replace(/ /g, "");//dds为得到后的内容
  return dds;
}
// 设置常数
const baseUrl = 'http://118.24.159.161:8083/h5';

// 获取基本信息
let timeStamp = Date.parse(new Date());
let token = timeStamp + 'hopynrztoken';
token = md5(token).toUpperCase();

// 设置接口token
$(document).ajaxSend(function (event, xhr) {
  xhr.setRequestHeader("token", token);
  xhr.setRequestHeader("timeStamp", timeStamp);
});

//返回上一页
let back = () => {
  let to_back = document.getElementById('to_back');
  to_back.onclick = () => {
    window.history.go(-1);
  }
}

//得到头部标签
let getHeader = () => {
  if (sessionStorage.getItem('resHeader')) {
    let header = document.getElementsByClassName('headerTitle')[0];
    let resHeader = sessionStorage.getItem('resHeader');
    resHeader = JSON.parse(resHeader);
    header.innerHTML = resHeader.name;
  } else {
    $.ajax({
      url: baseUrl + '/siteInfo',
      dataType: 'json',
      method: 'get',
      success: function (res) {
        let header = document.getElementsByClassName('headerTitle')[0];
        header.innerHTML = res.siteInfo.name;
      }
    })
  }
}


