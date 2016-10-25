/**
 * Created by msjrIT on 2016/10/17.
 */
// 规模分析 Scale analysis
function draw_scale_analysis(){
    var scale_analysis = echarts.init(document.getElementById('scale_chart'));
    // 指定图表的配置项和数据
    var scale_option = {
        title: {
            text: '历年规模变化(单位：亿)',
            textStyle:{
                fontWeight:'lighter',
                fontSize:'14'
            }

        },
        color: ['#3398DB'],
        tooltip: {},
        grid:{
            left: '6%',
            right: '4%',
            width:"330",
            height:"200"
        },
        xAxis: {
            data: ["15Q1","15Q2","15Q3","15Q4","16Q1","16Q2","16Q3","16Q4"]
        },
        yAxis: {},
        series: [{
            name: '规模',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20,10,20]
        }]
    };
    scale_analysis.setOption(scale_option);
}
// 业绩表现
function draw_performance_chart(){
    var performance_chart = echarts.init(document.getElementById('performance'));
// 配置模拟数据
    var base = +new Date(2000, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var date = [];

    var data = [Math.random() * 300];

    for (var i = 1; i < 100; i++) {
        var now = new Date(base += oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }

    var performance_option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
       /* title: {
            text: '大数据量面积图',
            textStyle:{
                fontWeight:'lighter',
                fontSize:'14'
            }
        },*/
        legend: {
            top: 'bottom',
            data:['意向']
        },
        grid:{
            left: '8%',
            right: '4%',
            width:"330",
            height:"200"
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value',
            boundaryGap: [-10, '100%']
        },
        dataZoom: [{
            type: 'select',
            start: 0,
            end: 10
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name:'模拟数据',
                type:'line',
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                data: data
            }
        ]
    };
    performance_chart.setOption(performance_option);
}



