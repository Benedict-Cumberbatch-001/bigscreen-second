<!--echarts实例化-->
function setmarkline(sensor,mndata,p,s){
                sensor.setOption({
                                series: [
                                    {
                                        symbolSize: 6, // 增加数据点的标记大小
                                        itemStyle: {
                                            emphasis: {
                                                borderWidth: 2, // 增加点击触发区域的边框宽度
                                                }
                                        },
                                        name: '振幅',
                                        type: 'line',
                                        lineStyle: {
                                            color: 'red',
                                        },
                                        symbol: 'rect',
                                        showSymbol:false,
                                        data: mndata.map(function (item) {
                                          return item[1];
                                        }),
                                        markLine: {
                                        data: [
                                           {
                                              silent: false,
                                              lineStyle: {
                                                  color: 'green'
                                                },
                                              name: 'P波到时',
                                              xAxis: p,
                                              label:{
                                              formatter:'P波到时'
                                              }
                                          },
                                            {
                                                silent: false,
                                                lineStyle: {
                                                    color: 'blue'
                                                },
                                                name: 'S波到时',
                                                xAxis:s,
                                                label: {
                                                    formatter: 'S波到时'
                                                }
                                            }
                                          ]
                                      }
                                    }
                                ]
                            });
            }

// Function to load data from a JSON file
function loadDataFromJson(index) {
    //var sensorId = sensors[index].id;
    var jsonFileName = '/static/weizhen_' + (index+1) + '.json'; // Adjust the JSON file naming convention as needed
    //var sensor = echarts.init(document.getElementById(sensorId));
    var sensors=[
    {id:'sensor1'},
    {id:'sensor2'},
    {id:'sensor3'},
    {id:'sensor4'},
    {id:'sensor5'},
    {id:'sensor6'},
    ];
    var sensorcharts=[];
    for (var i=0; i < sensors.length; i++) {
    (function () {
        sensorid=sensors[i].id
        console.log(sensorid)
        var sensor = echarts.init(document.getElementById(sensorid));
        sensorcharts.push(sensor)
    })();}
    for (var i=0; i < sensors.length; i++) {
    // 在 loadDataFromJson 函数中，您可以使用立即执行函数来正确捕获变量 i，以确保在回调函数中访问到正确的 sensorcharts[i]
    (function (i) {// 使用立即执行函数来捕获变量 i

        var mndata;
        $.get(jsonFileName, function (data) {
            data=data["data"][i]["wave-data"]
            // console.log(data)
            mndata=data
            sensorcharts[i].setOption(
                (option = {
                    backgroundColor: '#ffffcc',
                    title: {
                        show: false,
                        text: '年月日',
                        right: '1%',
                        textStyle: {
                            color: 'black',
                            fontFamily: '微软雅黑',
                            fontWeight: 'lighter',
                            fontSize: 16
                        }
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        top: '12%',
                        left: '5%',
                        right: '2%',
                        bottom: '31%',

                    },
                    xAxis: {
                        axisLabel:{

                            show:false
                        },
                        axisTick:{
                          show:false
                        },
                        data: data.map(function (item) {
                            return item[0];
                        })
                    },
                    yAxis: {},

                    dataZoom: [
                        {
                            // startValue: '2014-06-01',
                            // endValue:'2015-02-24'
                        },
                        {
                            type: 'inside'
                        }
                    ],

                    series: {
                        symbolSize:6 , // 增加数据点的标记大小
                        itemStyle: {
                            emphasis: {
                                borderWidth: 2, // 增加点击触发区域的边框宽度
                                }
                        },
                        name: '振幅',
                        type: 'line',
                        lineStyle: {
                            color: 'red',
                            width:1
                        },
                        symbol: 'rect',
                        showSymbol:false,
                        data: data.map(function (item) {
                            return item[1];
                        })
                    }
                })
            );
        });
        window.addEventListener("resize", function () {//echarts自带的能随着页面大小自动变化的函数
            sensorcharts[i].resize();
        });
        var ptime=-1;
        var stime=-1;
        sensorcharts[i].on('click', function(params) {
            // console.log(params.name);
            var x = params.dataIndex;
            // 这里没必要再加一个layuiuse函数，会冲突导致这个组件不显示
            var layer = layui.layer;
            layer.alert('请选择要设置的波形到时类型', {
                //skin: 'layui-layer-lan',
                btn: ['P波到时', 'S波到时'],
                btnAlign: 'c', // 按钮居中显示
                btn1: function(index){
                    ptime=x
                    setmarkline(sensorcharts[i],mndata,ptime,stime)
                    layer.closeAll();
                },
                btn2: function(){
                    stime=x
                    setmarkline(sensorcharts[i],mndata,ptime,stime)
                    layer.closeAll();
                    //layer.msg('按钮二的回调');
                },
            });

        });
        //循环函数的结尾



    //layui表格
    layui.use('table', function() {
    var table = layui.table;
    // 加载table实例
    var inst = table.render({
        elem: '#ID-table-demo-page',
        url: jsonFileName, // 此处为静态模拟数据，实际使用时需换成真实接口，数据接口
        page: { // 支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
            limit: 15,
            limits: [5, 10, 15, 20],

            layout: ['limit', 'count', 'prev', 'page', 'next', 'skip'], //自定义分页布局
            //curr: 1, //设定初始在第 5 页
            groups: 1, //只显示 1 个连续页码
            first: false, //不显示首页
            last: false //不显示尾页
        },
        pagebar: '#ID-table-demo-page-pagebar', // 分页栏模板
        css: [ // 设置单元格样式
              // 取消默认的溢出隐藏，并设置适当高度

              '.layui-table-cell select{height:100%;  margin: 0 auto;width:60px}',
              '.layui-table-cell .layui-form-switch{height:100%;  margin: 0 auto;}'
            ].join(''),
        cols: [[
            {field: 'id', width: 130, title: '传感器ID', sort: false},
            {field: 'data type', width: 133.93, title: '数据类型', sort: false,templet: '#TPL-select-primary'},
            {field: 'noise', width: 133.93, title: '是否含有噪声', sort: false,templet: '#ID-table-demo-templet-switch'},
            {field: 'p-wave arrival time', width: 133.93, title: 'P波到时', sort: false},
            {field: 's-wave arrival time', width: 133.93, title: 'S波到时', sort: false},
            {field: 'time', width: 198, title: '采集时间', sort: false},
        ]],
        done: function(res, curr, count){
              var options = this;
              console.log(options)
              // 获取当前行数据
              table.getRowData = function(elem){
                var index = $(elem).closest('tr').data('index');
                return table.cache[options.id][index] || {};
              };

              // 原生 select 事件
              $('.select-demo-primary').on('change', function(){
                var value = this.value; // 获取选中项 value
                var data = table.getRowData(this); // 获取当前行数据(如 id 等字段，以作为数据修改的索引)
                // 更新数据中对应的字段
                data.data_type = value;
                console.log(data["data type"])

                if (value=="噪声"){
                datatype=0
                }else if (value=="微震") {
                datatype = 1
                }else if (value=="汽笛"){
                datatype=2
                }else if (value=="电流"){
                datatype=3
                }else if (value=="爆破"){
                datatype=4
                }
                data["data type"]=datatype

                var updatedJsonString = JSON.stringify(data)
                $.get(jsonFileName, function (jsondata){
                    jsondata["data"][i]=updatedJsonString

                })


                // console.log(datatype)

                // console.log(JSON.stringify(data))

                // 显示 - 仅用于演示
                // layer.msg('选中值: '+ value +'<br>当前行数据：'+ JSON.stringify(data));
              });


            }
        /*parseData: function(res){ //将原始数据解析成 table 组件所规定的数据，res为从url中get到的数据
	    var result;

	    //(前端来实现)分页方法一：
	    //这是前台 用res.data接受全部数据 再根据当前页的条件从全部数据中选取一部分数据显示出来
	    if(this.page.curr){
	        //若为第二页 则curr为2 页面显示的数据就是从res.data集合数组里的 （2-1）*limit（10）=10 到 limit（10）*2=20的数据
	        result = res.data.slice(this.limit*(this.page.curr-1),this.limit*this.page.curr);
	    }
	    else{
	        // 一开始就是第一页 则就是 显示的数据就是从res.data集合数组里的0到limit（10）中
	        result=res.data.slice(0,this.limit);
	    }
	     return {
	        "code": 0, //解析接口状态
	        "msg": res.msg, //解析提示文本
	        "count": res.count, //解析数据长度
	        "data": result //解析数据列表
	    };
	},*/
    });

    // 状态 - 开关操作
    /*form.on('switch(demo-templet-status)', function(obj){
        var id = this.value;
        var name = this.name;
        layer.tips(id + ' ' + name + ': '+ obj.elem.checked, obj.othis);
          });*/
    // 底部分页栏事件
    table.on('pagebar(ID-table-demo-page)', function (obj) {
        var eventValue = obj.event; // 获得按钮 lay-event 值
        layer.msg(eventValue);
        });
    })
    })(i);}


}
var currentDataIndex = 0; // Initialize the index to 0
var mirclenght=3
// Function to handle the "Next" button click
$('#nextButton').on('click', function () {
    currentDataIndex = (currentDataIndex + 1) % mirclenght;
    loadDataFromJson(currentDataIndex);
});

// Function to handle the "Previous" button click
$('#prevButton').on('click', function () {
    currentDataIndex = (currentDataIndex - 1 +mirclenght) % mirclenght;
    loadDataFromJson(currentDataIndex);
});

// Initial data load
loadDataFromJson(currentDataIndex);

/*var sensors=[
    {id:'sensor1'},
    {id:'sensor2'},
    {id:'sensor3'},
    {id:'sensor4'},
    {id:'sensor5'},
    {id:'sensor6'},
];
for (var i=0; i < sensors.length; i++) {
    (function () {
        sensorid=sensors[i].id
        console.log(sensorid)
        var sensor = echarts.init(document.getElementById(sensorid));
        $.get('/static/micr_1.json', function (data) {
            sensor.setOption(
                (option = {
                    backgroundColor: '#ffffcc',
                    title: {
                        show: false,
                        text: '年月日',
                        right: '1%',
                        textStyle: {
                            color: 'black',
                            fontFamily: '微软雅黑',
                            fontWeight: 'lighter',
                            fontSize: 16
                        }
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        top: '12%',
                        left: '5%',
                        right: '2%',
                        bottom: '31%',

                    },
                    xAxis: {
                        data: data.map(function (item) {
                            return item[0];
                        })
                    },
                    yAxis: {},

                    dataZoom: [
                        {
                            startValue: '2014-06-01'
                        },
                        {
                            type: 'inside'
                        }
                    ],

                    series: {
                        name: '振幅',
                        type: 'line',
                        lineStyle: {
                            color: 'red',
                        },
                        symbol: 'none',
                        data: data.map(function (item) {
                            return item[1];
                        })
                    }
                })
            );
        });
        window.addEventListener("resize", function () {//echarts自带的能随着页面大小自动变化的函数
            sensor.resize();
        });
    })();

}*/


