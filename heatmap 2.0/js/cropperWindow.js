//圈选功能实现代码  
let cropperWindowLock = true;   
let CropBoxFirstShowLock = true;
    function cropperWindow(){ 
        if(cropperWindowLock){
            $('.heatmap-canvas').cropper({
                zoomable:false,
                background:false,  
                autoCropArea:0.1,
                modal:false,
                crop: function(e) {
                    let params = {
                        q: getValue("q"),
                        pf: getValue("pf") || 0,
                        scid: getValue("scid") || 1,
                        top: parseInt(e.y),  //不支持小数 误改
                        left: parseInt(e.x),
                        width: $("iframe").width(),
                        height: $(window).height(),
                        right: parseInt(e.x + e.width),
                        bottom: parseInt(e.y + e.height),
                        start:getValue("start")||NowTime,
                        end:getValue("end")||NowTime,
                        conv:getValue("conv")    
                    };
                        let cropperurl = "https://sou.api.autohome.com.cn/webapi/mrec/GetZoneClickInfo?" + r(params);
                        jQuery.ajax({
                        type: "GET",
                        url: cropperurl,
                        dataType: "jsonp",
                        jsonp: "_callback",
                        success: function (data) {
                                let d = data.result.data;
                                $("#vis_info").text("区域点击信息，搜索：" + d[0].Count + ",点击:" + d[0].ClickCount +
                                    ",点击占比:" + (d[0].ClickRatio * 100).toFixed(2) + "%");
                                    state = false;
                            console.log("圈选success");
                        },
                        error: function (e) {
                                 state = false;
                            console.log("圈选error");
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