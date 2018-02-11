"use strict";
//ф╫л╗╪сть iframe
function load() {
    let pf = getValue("pf");
    let scid = getValue("scid");
    if (pf == undefined || pf == null)
        document.getElementById("content_frame").src = "https://sou.autohome.com.cn/zonghe?q=" + decodeURIComponent(
            request.q);
    else if (pf == "1")
        document.getElementById("content_frame").src = "https://sou.m.autohome.com.cn/zonghe?pq=&type=zonghe&q=" +
        request.q;
    else if (pf == "3")
        document.getElementById("content_frame").src = "https://sou.m.autohome.com.cn/h5/2.2/search.html#/0?q=" +
        request.q;
    else
        document.getElementById("content_frame").src = "https://sou.autohome.com.cn/zonghe?q=" + decodeURIComponent(
            request.q);
}

function REload() {
    let pf = getValue("pf");
    let scid = getValue("scid");
    if (pf == undefined || pf == null)
        document.getElementById("content_frame").src = "https://sou.autohome.com.cn/zonghe?q=" + decodeURIComponent(
        request.q);
    else if (pf == "1")
        document.getElementById("content_frame").src = "https://sou.m.autohome.com.cn/zonghe?pq=&type=zonghe&q=" +
        request.q;
    else if (pf == "3")
        document.getElementById("content_frame").src = "https://sou.m.autohome.com.cn/h5/2.2/search.html#/0?q=" +
        request.q;
    else
        document.getElementById("content_frame").src = "https://sou.autohome.com.cn/zonghe?q=" + decodeURIComponent(
        request.q);
    
}

      