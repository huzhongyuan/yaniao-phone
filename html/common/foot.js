let foot ='<footer class="aui-bar aui-bar-tab footer" id="footer">' +
'<div class="aui-bar-tab-item footerNav tohome" tapmode>' +
    '<img src="./../images/home1.png">' +
    '<div class="aui-bar-tab-label">首页</div>' +
'</div>' +
'<div class="aui-bar-tab-item footerNav toteam" tapmode>' +
    '<img src="./../images/team.png">' +
    '<div class="aui-bar-tab-label">团队</div>'+
'</div>' +
'<div class="aui-bar-tab-item footerNav tocase" tapmode>' +
    '<img src="./../images/case.png">' +
    '<div class="aui-bar-tab-label">案例</div>' +
'</div>' +
'<div class="aui-bar-tab-item footerNav tocompany" tapmode>' +
    '<img src="./../images/company.png">' +
    '<div class="aui-bar-tab-label">我们</div>' +
'</div>' +
'</footer>';
document.write(foot);

//点击底部导航跳转
let footerNav = () => {
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
footerNav();
