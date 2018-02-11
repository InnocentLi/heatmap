"use strict";
// 热力图实现代码
let resultHeatmap = {
    max: request.max,
    min: request.min,
    data: []
};
function heatmapAjax(){                                                           // start=&end=&size=10000&pf=0&max=100&conv=true
    let heatmapurl = "https://sou.api.autohome.com.cn/webapi/mrec/GetClickXYForSearch?q="+getValue("q")+"&pf="+request.pf+"&size="+getValue("size")+"&max="+getValue("max")+"&width=" +getValue("width") + "&height=" + $(window).height() +"&conv="+getValue("conv")+"&start="+getValue("start")+"&end="+getValue("end");
    jQuery.ajax({              
    type: "GET",
    url: heatmapurl,
    dataType: "jsonp",
    jsonp: "_callback",
    success: function (data) {
        resultHeatmap.data = data.result.data;
        let canvas = document.getElementsByClassName("heatmap-canvas")[0];
        let cxt=canvas.getContext("2d"); 
        cxt.clearRect(0, 0, canvas.width, canvas.height);       
        document.getElementById("loading").style.display = "none";
        document.getElementById("heatmapLoading").style.display = "none";  
        drawHeapmap(); 
        console.log("热力图success");
    },
    error: function (e) {
        console.log("热力图error");
    }
});
}

//  JavaScript Heatmap Library
let heatmapInstance = h337.create({
    container: document.getElementById('content')
});
function drawHeapmap() {
    heatmapInstance.setData(resultHeatmap);  
}; 


   