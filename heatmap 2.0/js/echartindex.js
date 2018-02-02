var BarChartData;
var BarChartDataClickRatio = [];
var count = 3;

console.log("ddd");
// gb2312   
var myChart = echarts.init(document.getElementById('main'));
function drawBarChart() {   
    count--;                                                                                             
    var url =  "https://sou.api.autohome.com.cn/webapi/mrec/GetClickRatio?q="+encodeURIComponent(request.q)+"&pf=0&scid=1&width=" + $(window).width() + "&height=" + $(window).height() + "&top=" + request.top + "&left=0&start="+request.start+"&end="+request.end+"&mode=day";
    $.ajax({
        type: "GET",
        url: url,
        dataType: "jsonp",
        jsonp: "_callback",
        jsonpCallback: "jsonhandle",
        success: function (data) {

            BarChartData = data.result.data;
            var BarChartDataDate = [];
            for (var i = 0; i < BarChartData.length; i++) {
                BarChartDataDate.push(BarChartData[i].date);
                BarChartDataClickRatio[i] = (BarChartData[i].ClickRatio * 100);

            }
            if (BarChartDataDate[0]) {
                drawEchart(BarChartDataDate);
            }
        },
        error: function (e) {
            if(count){
                drawBarChart();
            }
        }
    });


}


function drawEchart(array) {
    // 基于准备好的dom，初始化echarts实例
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '关键词'+request.q+'点击率(%)',
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