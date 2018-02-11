"use strict";
//  UTF-8   9304893@qq.com
// url取值  
SizeChange();
//记录方块位置
// url
set();

function ChangeUrl() {
    let url = window.location.pathname + "?q=" + request.q + "&start=" + request.start + "&end=" + request.end + "&size=" + request.size + "&pf=" + request.pf + "&max=" + request.max + "&conv=" + request.conv + "&width=" +request.width+"&height=" + request.height;
    window.location.href = url;
}
//对起始和终止时间的处理
// 点击按钮监听，将input 值传入url更新并刷新
function urlChange() {
    request.q = $("#search").val();
    request.max = document.getElementById('max').value;
    request.size = $("#size").val();
    request.start = $("#begin").val();
    request.end = $("#end").val();
    let conv = document.getElementById("convCheckBox");
    request.conv = conv.checked;
    // search = encodeURIComponent(search);
    // request.q = search;
    ChangeUrl();
}

function SizeChange(){
        document.getElementById('search').value = decodeURIComponent(getValue('q'));
        // document.getElementById('max').value = getValue('max');
        if(getValue('conv') == "false"){
            document.getElementById("convCheckBox").checked = false;
        }
        else{
            document.getElementById("convCheckBox").checked = true;
        }
           
        document.getElementById('size').value = getValue('size');
        document.getElementById('begin').value = getValue('start');
        document.getElementById('end').value = getValue('end');
}
//平台更改
function platform() {
    let url = window.location.pathname;
    $("#pc").click(function () {
          request.pf = 0;
          ChangeUrl();
    })
    $("#phone").click(function () {
           request.pf = 1;
           ChangeUrl();
    })
    $("#app").click(function () {
          request.pf = 3;
           ChangeUrl();
    })
}

platform();
//start = 2018 - 01 - 16 & end=2018 - 01 - 17
// 正在载入动画   
function hideLoading() {
    document.getElementById("iframe").height = 0;
    document.getElementById("iframe").height = document.getElementById("iframe").contentWindow.document.body.scrollHeight;
    document.getElementById("content_loading").style.display = "none";
}
//不同平台加载不同的页面

$("#S_change").click(function(){
    cropperWindow();
    CropBoxFirstShowLock = false; 
})

$("#S_Mode").click(function(){
    S_Mode();
})
//监听
//隐藏
// 四个选项卡
function S_search(params) {
    $("#box1").show();
    $("#box4").hide();
};
function S_vev() {
    $("#box1").hide();
    $("#box4").hide();
};
function S_Mode(s) {
    $("#box4").show();
    $("#box1").hide();
};
let lock = false;
function iframeer() {
    let ifm = document.getElementById("content_frame");
    ifm.height = document.documentElement.clientHeight;
}
//监听滚动事件
$(function () {
    loadClickRatio();
    $(window).scroll(function () {
        loadClickRatio();
    });
});
