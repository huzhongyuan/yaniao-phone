let foot ='<footer class="aui-bar aui-bar-tab footer" id="footer">' +

'</footer>' +
'</body>' +
'</html>';
document.write(foot);


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


//点击底部导航跳转
let footNav = () => {
    let tohome = document.getElementsByClassName('tohome')[0];
    let toteam = document.getElementsByClassName('toteam')[0];
    let tocase = document.getElementsByClassName('tocase')[0];
    let tocompany = document.getElementsByClassName('tocompany')[0];
    tohome.onclick = () => {
        window.location.href = './home.html';
    }
    toteam.onclick = () => {
        window.location.href = './team.html';
    }
    tocase.onclick = () => {
        window.location.href = './case.html';
    }
    tocompany.onclick = () => {
        window.location.href = './company.html';
    }
}
// sessionStorage.setItem('resFooter', '');
// console.log(sessionStorage.getItem('resFooter'));


//写入头部和底部数据
let writeCommon = (resFooter, resHeader) => {
    let footerNav = document.createElement('div');
    footerNav.innerHTML = '<div class="aui-bar-tab-item footerNav tohome" tapmode>' +
        '<img src="' + resFooter[0].addImgUrl + '" class="homeImg" style="width:1rem;height:1rem;">' +
        '<div  class="aui-bar-tab-label">' + resFooter[0].columnName + '</div>' +
    '</div>' +
    '<div class="aui-bar-tab-item footerNav toteam" tapmode>' +
        '<img src="' + resFooter[1].addImgUrl + '" style="width:1rem;height:1rem;" class="teamImg">' +
        '<div class="aui-bar-tab-label">' +resFooter[1].columnName+ '</div>'+
    '</div>' +
    '<div class="aui-bar-tab-item footerNav tocase" tapmode>' +
        '<img src="' + resFooter[2].addImgUrl + '"  style="width:1rem;height:1rem;" class="caseImg">' +
        '<div class="aui-bar-tab-label">' + resFooter[2].columnName + '</div>' +
    '</div>' +
    '<div class="aui-bar-tab-item footerNav tocompany" tapmode>' +
        '<img src="' + resFooter[3].addImgUrl + '"  style="width:1rem;height:1rem;" class="companyImg">' +
        '<div class="aui-bar-tab-label">' + resFooter[3].columnName + '</div>' +
    '</div>';
    let footer = document.getElementById('footer');
    footer.style.backgroundColor = 'rgba(0,0,0,1)';
    footer.appendChild(footerNav);
    let header = document.getElementsByClassName('header')[0];
    header.innerHTML = resHeader.name;
}

// sessionStorage.setItem('resFooter', '');
//储存数据
if(sessionStorage.getItem('resFooter') && sessionStorage.getItem('resFooter')) {
    //console.log(1111);
    let resFooter = sessionStorage.getItem('resFooter');
    let resHeader = sessionStorage.getItem('resHeader');
    resFooter = JSON.parse(resFooter);
    resHeader = JSON.parse(resHeader);
    writeCommon(resFooter, resHeader);
    footNav();
}else {
//首次进入界面加载数据
let footerImg = new Promise((resolve, reject) => {
    $.ajax({
        url: baseUrl + '/siteInfo',
        dataType: 'json',
        method: 'get',
        success: function (res) {
        writeCommon(res.h5Footer, res.siteInfo);
        sessionStorage.setItem('resFooter', JSON.stringify(res.h5Footer));
        sessionStorage.setItem('resHeader', JSON.stringify(res.siteInfo));
        footNav();
        }
    })
})
}



// footerNav();
