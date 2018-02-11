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
            console.log("����ͼsuccess");
        },
        error: function (e) {
            countBar--;  
            if(countBar){
                setTimeout(drawBarChart,100)
            }
            console.log("����ͼerror");
        }
    });
}



function drawEchart(array) {
    // ����׼���õ�dom����ʼ��echartsʵ��
    // ָ��ͼ��������������
    let option = {
        title: {     
            text: '�ؼ���'+decodeURIComponent(request.q)+'�����(%)',
            subtext: '����'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['�ؼ��ʵ����']
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
            name: '�ؼ��ʵ����',
            type: 'bar',
            data: BarChartDataClickRatio
        }
        ]
    };
    // ʹ�ø�ָ�����������������ʾͼ��   
    myChart.setOption(option);
}    