"use strict";
// gb2312
//����search input��ť
function set(){
    REload();
    loadClickRatio();
    urliframeChangeAjax();
    // heatmapAjax();
}
$("#search").change(function(){
        request.q = encodeURIComponent($("#search").val());
        history.pushState("","",window.location.pathname+"?q=" + request.q + "&start=" + request.start + "&end=" + request.end + "&size=" + request.size + "&pf=" + request.pf + "&max=" + request.max + "&conv=" + request.conv + "&width=" +request.width+"&height=" + request.height)
        set();
});   
//�����Ƿ�����ת��
   $("#convCheckBox").change(function(){
     if(document.getElementById("convCheckBox").checked == true){
        history.pushState("","",window.location.pathname+"?q=" + request.q + "&start=" + request.start + "&end=" + request.end + "&size=" + request.size + "&pf=" + request.pf + "&max=" + request.max + "&conv=" + "true" + "&width=" +request.width+"&height=" + request.height)
         request.conv = true;
     }  
     else{
        history.pushState("","",window.location.pathname+"?q=" + request.q + "&start=" + request.start + "&end=" + request.end + "&size=" + request.size + "&pf=" + request.pf + "&max=" + request.max + "&conv=" + "false" + "&width=" +request.width+"&height=" + request.height)
        request.conv = false;
     }
     heatmapAjax();
   })
//����size ֵ
$("#size").change(function(){
    request.size = $("#size").val();
    history.pushState("","",window.location.pathname+"?q=" + request.q + "&start=" + request.start + "&end=" + request.end + "&size=" + request.size + "&pf=" + request.pf + "&max=" + request.max + "&conv=" + request.conv + "&width=" +request.width+"&height=" + request.height)
    heatmapAjax();
});
 
//start ��ʼ
$("#begin").change(function(){
    request.start = $("#begin").val();
    history.pushState("","",window.location.pathname+"?q=" + request.q + "&start=" + request.start + "&end=" + request.end + "&size=" + request.size + "&pf=" + request.pf + "&max=" + request.max + "&conv=" + request.conv + "&width=" +request.width+"&height=" + request.height)
    heatmapAjax();
});
// end ����
$("#end").change(function(){
    request.end = $("#end").val();
    history.pushState("","",window.location.pathname+"?q=" + request.q + "&start=" + request.start + "&end=" + request.end + "&size=" + request.size + "&pf=" + request.pf + "&max=" + request.max + "&conv=" + request.conv + "&width=" +request.width+"&height=" + request.height)
    heatmapAjax();
});
//����������
//max ����������
    $("#max")[0].onmousemove = function() {
        $("#maxValue")[0].innerHTML = this.value;
        request.max = this.value;
        history.pushState("","",window.location.pathname+"?q=" + request.q + "&start=" + request.start + "&end=" + request.end + "&size=" + request.size + "&pf=" + request.pf + "&max=" +this.value + "&conv=" + request.conv + "&width=" +request.width+"&height=" + request.height)
        resultHeatmap.max = request.max; 
        drawHeapmap();
    }   
//area ѡ�����
$("#area").change(function(){
    let value =$(this).val();
    history.pushState("","",window.location.pathname+"?q=" + request.q + "&start=" + request.start + "&end=" + request.end + "&size=" + request.size + "&pf=" + request.pf + "&max=" + request.max + "&conv=" + request.conv + "&width=" +$(this).val()+"&height=" + request.height)
    document.getElementById("content_frame").width = value;
    heatmapAjax();
    loadClickRatio();
});
