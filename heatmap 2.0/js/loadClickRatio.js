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
              $("#vis_info").text("��:" + ((($(document).scrollTop() + 0.0 + windowHeght) /windowHeght).toFixed(2)) +
                "ҳ,����:" + data.result.data[0].Count + ",���:" + data.result.data[0].ClickCount + ",���ռ��:" + (data.result.data[0].ClickRatio * 100).toFixed(2) + "%");
             drawBarChart();
             console.log("�������ʱ��success");
        },
        error: function (e) {
            console.log("�������ʱ��error");
        }
    });
}     



