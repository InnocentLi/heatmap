//Ȧѡ����ʵ�ִ���  
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
                        top: parseInt(e.y),  //��֧��С�� ���
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
                                $("#vis_info").text("��������Ϣ��������" + d[0].Count + ",���:" + d[0].ClickCount +
                                    ",���ռ��:" + (d[0].ClickRatio * 100).toFixed(2) + "%");
                                    state = false;
                            console.log("Ȧѡsuccess");
                        },
                        error: function (e) {
                                 state = false;
                            console.log("Ȧѡerror");
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