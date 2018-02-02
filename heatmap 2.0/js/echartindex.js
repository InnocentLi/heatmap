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
    // ����׼���õ�dom����ʼ��echartsʵ��
    // ָ��ͼ��������������
    var option = {
        title: {
            text: '�ؼ���'+request.q+'�����(%)',
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