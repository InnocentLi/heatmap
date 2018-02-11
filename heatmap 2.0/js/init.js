let NowTime;
SetTimer();  
function SetTimer(){
    Date.prototype.toDateInputValue = (function() {
        let now =  new Date().setUTCHours(-23)
        let local = new Date(now);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0,10);
    });
     NowTime = new Date().toDateInputValue();
     Timer();
    }
function Timer(){   
    if(getValue("start")==""||null||window.location.search==""){
        document.getElementById('begin').value = NowTime;
    }
    if(getValue("end")==""||null||window.location.search==""){
        document.getElementById('end').value = NowTime;
    }
    initSetUrl();
}

function initSetUrl(){
    history.pushState("","",window.location.pathname+"?q=" + request.q + "&start=" + request.start + "&end=" + request.end + "&size=" + request.size + "&pf=" + request.pf + "&max=" + request.max + "&conv=" + request.conv + "&width=" +request.width+"&height=" + request.height)
}


