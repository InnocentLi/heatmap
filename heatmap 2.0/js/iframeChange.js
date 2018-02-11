"use strict";
function  urliframeChangeAjax(){
    let  urliframeChange = "https://sou.api.autohome.com.cn/webapi/mrec/GetWStat?"+"q="+getValue("q")+"&pf="+getValue("pf")+"&start="+getValue("start")+"&end="+getValue("end");
    jQuery.ajax({
        type: "GET",
        url: urliframeChange,
        dataType: "jsonp",
        jsonp: "_callback",
        success: function (data) {
            let d = data.result.data;
            setFun(d);
            console.log("iFrameWidthsuccess");
            heatmapAjax();
        },
        error: function (e) {
            console.log("iFrameWidtherror");
        }});
}
function setFun(id){ 
      let select = document.getElementById("area"); 
      $("#area").empty();
      for(let x = 0 ;x < id.length;x++){ 
        let option = document.createElement("option"); 
            if(id[x].Width&&id[x].Count){
                option.setAttribute("value",id[x].Width);
                option.appendChild(document.createTextNode(id[x].Width+"("+id[x].Count+")")); 
                select.appendChild(option);
            }
      } 
      document.getElementById("content_frame").width = $("#area").val();
    }


 
         