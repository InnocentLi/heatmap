// utf-8
//监听search input按钮
    $("#search").change(function(){
        request.q = $("#search").val();
        history.pushState("","",window.location.pathname+"?q=" + request.q + "&start=" + request.start + "&end=" + request.end + "&size=" + request.size + "&pf=" + request.pf + "&max=" + request.max + "&conv=" + request.conv + "&width=" +request.width+"&height=" + request.height)
      ChangeUrl(); 
    });   
//监听是否启用转换
   $("#convCheckBox").change(function(){
     if(document.getElementById("convCheckBox").checked == true){
        history.pushState("","",window.location.pathname+"?q=" + request.q + "&start=" + request.start + "&end=" + request.end + "&size=" + request.size + "&pf=" + request.pf + "&max=" + request.max + "&conv=" + "true" + "&width=" +request.width+"&height=" + request.height)
         request.conv = true;
     }  
     else{
        history.pushState("","",window.location.pathname+"?q=" + request.q + "&start=" + request.start + "&end=" + request.end + "&size=" + request.size + "&pf=" + request.pf + "&max=" + request.max + "&conv=" + "false" + "&width=" +request.width+"&height=" + request.height)
        request.conv = false;
     }
       ChangeUrl();
   })
//监听size 值
$("#size").change(function(){
    request.size = $("#size").val();
    history.pushState("","",window.location.pathname+"?q=" + request.q + "&start=" + request.start + "&end=" + request.end + "&size=" + request.size + "&pf=" + request.pf + "&max=" + request.max + "&conv=" + request.conv + "&width=" +request.width+"&height=" + request.height)
    ChangeUrl(); 
});
 
//start 开始

$("#begin").change(function(){
    request.start = $("#begin").val();
    history.pushState("","",window.location.pathname+"?q=" + request.q + "&start=" + request.start + "&end=" + request.end + "&size=" + request.size + "&pf=" + request.pf + "&max=" + request.max + "&conv=" + request.conv + "&width=" +request.width+"&height=" + request.height)
    ChangeUrl(); 
});

// end 结束
$("#end").change(function(){
    request.end = $("#end").val();
    history.pushState("","",window.location.pathname+"?q=" + request.q + "&start=" + request.start + "&end=" + request.end + "&size=" + request.size + "&pf=" + request.pf + "&max=" + request.max + "&conv=" + request.conv + "&width=" +request.width+"&height=" + request.height)
    ChangeUrl(); 
});
 