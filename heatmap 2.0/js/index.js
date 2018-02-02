// please use GB2312 NOT UTF-8   9304893@qq.com
// url取值  
SizeChange();
function getValue(parm) {
    var reg = new RegExp("(^|&)" + parm + "=([^&]*)(&|$)");
    var r = location.href.substr(location.href.indexOf("\?") + 1).match(reg);
    if (r != null) return r[2];
    return null;
}
//记录方块位置
// url 
var request = {
    q: decodeURI(getValue("q")),    //查询的Q值
    pf: getValue("pf") || 0,                          
    scid: getValue("scid") || 1,
    max: getValue("max") || 100,
    min: getValue("min") || 1,
    size:getValue("size")||10000,
    start: getValue("start")||"",
    end: getValue("end")||"",
    height: $(window).height()||"",
    width: $(window).width()||"",
    top: getValue("top")||0,  
    left: getValue("left")||"",
    right: getValue("right")||"",
    bottom: getValue("bottom")||"",
    mode:getValue("mode")||"",
    conv:getValue("conv")||true
};
function ChangeUrl() {
    var search = encodeURIComponent(request.q);
    request.q = search; 
    var url = window.location.pathname + "?q=" + request.q + "&start=" + request.start + "&end=" + request.end + "&size=" + request.size + "&pf=" + request.pf + "&max=" + request.max + "&conv=" + request.conv + "&width=" +request.width+"&height=" + request.height;
    window.location.href = url;
}
//对起始和终止时间的处理
// URL过滤规则
function filter(obj) {
    var param = {};
    for (var key in obj) {
        if (obj[key] !== null && obj[key] !== undefined && obj[key] !== "null" && obj[key] !== "" && obj[key] !== "undefined") {
            param[key] = obj[key];
        }
    }
    return param;
}
var NowTime;
function SetTimer(){
    Date.prototype.toDateInputValue = (function() {
        var now =  new Date().setUTCHours(-23)
        var local = new Date(now);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0,10);
    });
     NowTime = new Date().toDateInputValue();
     Timer();
    }
    SetTimer();
function Timer(){   
    if(getValue("start")==""||null){
        document.getElementById('begin').value = NowTime;
    }
    if(getValue("end")==""||null){
        document.getElementById('end').value = NowTime;
    }
}
function set(){
     if($("#iframeWidth").val()==""||$("#iframeHeight").val()==""){
          console.log(request.width,request.height);
        ChangeUrl();
    }else{
        ChangeUrl();
    }
}
//setiFrame();
function setiFrame(){
    $("#iframeWidth").val(getValue("width"));
    $("#iframeHeight").val(getValue("height"));
    request.width = $("#iframeWidth").val();
    request.height = $("#iframeHeight").val();
    $("iframe").width(request.width);
    $("iframe").height(request.height);
}
// 点击按钮监听，将input 值传入url更新并刷新
function urlChange() {
    request.q = $("#search").val();
    request.max = document.getElementById('max').value;
    request.size = $("#size").val();
    request.start = $("#begin").val();
    request.end = $("#end").val();
    var conv = document.getElementById("convCheckBox");
    request.conv = conv.checked;
    // search = encodeURIComponent(search);
    // request.q = search;
    ChangeUrl();
}
function SizeChange(){
    document.getElementById('max').value = getValue('max');
    if( getValue('conv') == "false"){
        document.getElementById("convCheckBox").checked = false;
    }
    else{
        document.getElementById("convCheckBox").checked = true;
    }   
    document.getElementById('size').value = getValue('size');
    document.getElementById('search').value = decodeURI(getValue("q"));
    document.getElementById('begin').value = getValue('start');
    document.getElementById('end').value = getValue('end');
}
//平台更改
function platform() {
    var url = window.location.pathname;
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
function load() {
    var pf = getValue("pf");
    var scid = getValue("scid");
    if (pf == undefined || pf == null)
        document.getElementById("content_frame").src = "https://sou.autohome.com.cn/zonghe?q=" + decodeURI(
            getValue("q"));
    else if (pf == "1")
        document.getElementById("content_frame").src = "https://sou.m.autohome.com.cn/zonghe?pq=&type=zonghe&q=" +
        getValue("q");
    else if (pf == "3")
        document.getElementById("content_frame").src = "https://sou.m.autohome.com.cn/h5/2.2/search.html#/0?q=" +
        getValue("q");
    else
        document.getElementById("content_frame").src = "https://sou.autohome.com.cn/zonghe?q=" + decodeURI(
            getValue("q"));
}
function r(a) {
    var n = "";
    for (s in a)
        n += s + "=" + encodeURIComponent(a[s]) + "&";
    return n
}
var windowHeght = $(window).height();
function loadClickRatio() {
    request.top = $(document).scrollTop();
 //   console.log("request:" + JSON.stringify(request));
    var url = "https://sou.api.autohome.com.cn/webapi/mrec/GetClickRatio";

    $.ajax({
        type: "GET",
        url: url + "?" + r(request),
        timeout: 3e3,
        dataType: "jsonp",
        jsonp: "_callback",
        jsonpCallback: "jsonhandle",
        success: function (data) {
            var rs = data.result.data;
            $("#vis_info").text("第:" + ((($(document).scrollTop() + 0.0 + windowHeght) /windowHeght).toFixed(2)) +
                "页,搜索:" + rs[0].Count + ",点击:" + rs[0].ClickCount + ",点击占比:" + (rs[0].ClickRatio * 100).toFixed(0) + "%");
            drawBarChart();
        },
        error: function (e) {
            console.log("exception:" + e);
        }
    });
}
$("#S_change").click(function(){
    cropperWindow();
    var CropBoxFirstShowLock = false; 
})
$("#S_Mode").click(function(){
    S_Mode();
})
//监听
//隐藏
// 四个选项卡
function S_search(params) {
    $("#box1").slideToggle("slow");
    $("#box4").hide();
};

function S_vev() {
    $("#box1").hide();
    $("#box4").hide();
}

function S_Mode(s) {
    $("#box4").slideToggle("slow");
    $("#box1").hide();
}
var lock = false;
function iframeer() {
    var ifm = document.getElementById("content_frame");
    ifm.height = document.documentElement.clientHeight;
}

//监听滚动事件
$(function () {
    loadClickRatio();
    $(window).scroll(function () {
        loadClickRatio();
    });
});
//监听滚动条
$("#max")[0].onmousemove = function() {
    $("#maxValue")[0].innerHTML = this.value;
    request.max = this.value;
    resultHeatmap.max = request.max; 
    drawHeapmap();
}
var resultHeatmap = {
    max: request.max,
    min: request.min,
    data: []
};
setTimeout(heatmapAjax, 1000);
var count =10;
function heatmapAjax(){
    var url = "https://sou.api.autohome.com.cn/webapi/mrec/GetClickXYForSearch" + location.search + "&width=" +
    $(window).width() + "&height=" + $(window).height();
    jQuery.ajax({
    type: "GET",
    url: url,
    timeout: 3e3,
    dataType: "jsonp",
    jsonp: "_callback",
    jsonpCallback: "jsonhandle",
    success: function (data) {
        resultHeatmap.data = data.result.data;
        document.getElementById("loading").style.display = "none";          
    },
    error: function (e) {
        if(count){
            heatmapAjax();
            count--;
        } 
        console.log(e); 
    }
});
}
var heatmapInstance = h337.create({
    container: document.getElementById('content')   
});
function drawHeapmap() {
    heatmapInstance.setData(resultHeatmap);
}; 
setTimeout(drawHeapmap, 2500);
var cropperWindowLock = true;   
var CropBoxFirstShowLock = true;
    function cropperWindow(){ 
        if(cropperWindowLock){
            $('.heatmap-canvas').cropper({
                zoomable:false,
                background:false,  
                autoCropArea:0.1,
                crop: function(e) {
                    var params = {
                        q: decodeURI(getValue("q")),
                        pf: getValue("pf") || 0,
                        scid: getValue("scid") || 1,
                        top: parseInt(e.x),  //不支持小数误删
                        left: parseInt(e.y),
                        width: $(window).width(),
                        height: $(window).height(),
                        right: e.y + e.width,
                        bottom: e.x + e.height 
                    };
                        var url = "https://sou.api.autohome.com.cn/webapi/mrec/GetZoneClickInfo?" + r(params);
                        jQuery.ajax({
                        type: "GET",
                        url: url,
                        timeout: 3e3,
                        dataType: "jsonp",
                        jsonp: "_callback",
                        jsonpCallback: "jsonhandle",
                        success: function (data) {
                            var d = data.result.data;
                            $("#vis_info").text("区域点击信息，搜索：" + d[0].Count + ",点击:" + d[0].ClickCount +
                                ",点击占比:" + (d[0].ClickRatio * 100).toFixed(0) + "%");
                                state = false;
                        },
                        error: function (e) {
                           
                            state = false;
                        }});
                  }   
            });
            cropperWindowLock=!cropperWindowLock;
        }
        else {
            $('.heatmap-canvas').cropper("destroy");
            cropperWindowLock=!cropperWindowLock;
        }
    }