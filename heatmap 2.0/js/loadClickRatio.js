"use strict";
function loadClickRatio() {
let windowHeght = $(window)[0].innerHeight;
request.top = $(document).scrollTop();
 //   console.log("request:" + JSON.stringify(request));
 let Clickurl = "https://sou.api.autohome.com.cn/webapi/mrec/GetClickRatio";
    $.ajax({
        type: "GET",
        url: Clickurl + "?" + r(request),
        dataType: "jsonp",
        jsonp: "_callback",
        success: function (data) {    
              $("#vis_info").text("第:" + ((($(document).scrollTop() + 0.0 + windowHeght) /windowHeght).toFixed(2)) +
                "页,搜索:" + data.result.data[0].Count + ",点击:" + data.result.data[0].ClickCount + ",点击占比:" + (data.result.data[0].ClickRatio * 100).toFixed(2) + "%");
             drawBarChart();
             console.log("滚动点击时间success");
        },
        error: function (e) {
            console.log("滚动点击时间error");
        }
    });
}     



