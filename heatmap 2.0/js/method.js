"use strict";
//获取url内部值
function getValue(parm) {
    let reg = new RegExp("(^|&)" + parm + "=([^&]*)(&|$)");
    let r = location.href.substr(location.href.indexOf("\?") + 1).match(reg);
    if (r != null) return r[2];
    return "";
}
// URL过滤规则
function filter(obj) {
    let param = {};
    for (let key in obj) {
        if (obj[key] !== null && obj[key] !== undefined && obj[key] !== "null" && obj[key] !== "" && obj[key] !== "undefined") {
            param[key] = obj[key];
        }
    }
    return param;   
}
function r(a) {
    let n = "";
    for (let s in a)
        n += s + "=" + a[s] + "&";
    return n
}


let request = {
    q:  getValue("q")||"",    //查询的Q值
    pf: getValue("pf") || 0,                          
    scid: getValue("scid") || 1,
    max: getValue("max") || 100,
    min: getValue("min") || 1,
    size:getValue("size")||10000,         
    start: getValue("start")||"",
    end: getValue("end")||"",
    height: $(window)[0].innerHeight||"",
    width: $("iframe").width()||"",
    top: getValue("top")||0,  
    left: getValue("left")||"",
    right: getValue("right")||"",
    bottom: getValue("bottom")||"",
    mode:getValue("mode")||"",
    conv:getValue("conv")||false
};
