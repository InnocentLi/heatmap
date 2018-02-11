"use strict";
// gb2312()
let BarChartData;
let BarChartDataClickRatio;
let BarChartDataDate;
let countBar = 3;
let myChart = echarts.init(document.getElementById('main'));
function drawBarChart(){                                                                                              
    let drawBarurl =  "https://sou.api.autohome.com.cn/webapi/mrec/GetClickRatio?q="+request.q+"&pf=0&scid=1&width=" + $(window).width() + "&height=" + $(window)[0].innerHeight + "&top=" + request.top + "&left=0&start="+request.start+"&end="+request.end+"&mode=day";
    $.ajax({
        type: "GET",
        url: drawBarurl,
        dataType: "jsonp",
        jsonp: "_callback",
        success: function (data) {
            BarChartData = data.result.data;
             BarChartDataDate = [];
             BarChartDataClickRatio = [];
            for (let i = 0; i < BarChartData.length; i++) {
                BarChartDataDate.push(BarChartData[i].date);
                BarChartDataClickRatio.push(BarChartData[i].ClickRatio * 100);
            }
            if (BarChartDataDate[0]) {
                drawEchart(BarChartDataDate);
            }
            console.log("条形图success");
        },
        error: function (e) {
            countBar--;  
            if(countBar){
                setTimeout(drawBarChart,100)
            }
            console.log("条形图error");
        }
    });
}



function drawEchart(array) {
    // 基于准备好的dom，初始化echarts实例
    // 指定图表的配置项和数据
    let option = {
        title: {     
            text: '关键词'+decodeURIComponent(request.q)+'点击率(%)',
            subtext: '搜索'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['关键词点击率']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            max : 100
        },
        yAxis: {
            type: 'category',
            data: array
        },
        series: [{
            name: '关键词点击率',
            type: 'bar',
            data: BarChartDataClickRatio
        }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。   
    myChart.setOption(option);
}    