var t = null;
t = setTimeout(time, 1000);//開始运行
function time() {
    clearTimeout(t);//清除定时器
    dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = dt.getHours();//获取时
    var m = dt.getMinutes();//获取分
    var s = dt.getSeconds();//获取秒
    document.querySelector(".showTime").innerHTML = '当前时间：' + y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒";
    t = setTimeout(time, 1000); //设定定时器，循环运行
}



// 双饼状图表格，要求不要图形上的文字，只要图例
var myChart = echarts.init(document.getElementById('pie'));
var option = {

  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    top:'2%',
    textStyle:{
      color:'white',
        fontFamily:'宋体',
        fontWeight:'bold',
    },
    itemGap:10,
    height:'10%',
    padding: [5, 60],
    data: [
      '水利',
      '交通',
      '矿山',
      '边坡',
      '隧道',
      '地下厂房',
    ],

  },
  series: [

    {
      center:['50%','55%'],
      name: 'Access From',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '35%'],
      label: {
        // position: 'inner',
        // fontSize: 12,
        //   fontFamily: '宋体',
        //   color:'white',
        show:false
      },
      labelLine: {
        show: false,

      },
      data: [
        { value: 1548, name: '边坡' },
        { value: 775, name: '隧道' },
        { value: 679, name: '地下厂房', selected: true }
      ]
    },
    {
      center:['50%','55%'],
      name: 'Access From',
      type: 'pie',
      radius: ['50%', '65%'],

         label: {
        // fontSize: 12,
        //   fontFamily: '宋体',
        //   color:'white',
        //   borderType:'dotted',
           show: false
      },
      labelLine: {
        // length: 15,
        //  lineStyle:{
        //   width:2
        // }
        show: false,

      },

      data: [
        { value: 1048, name: '水利' },
        { value: 335, name: '交通' },
        { value: 310, name: '矿山' }

      ]
    }
  ]
};
myChart.setOption(option);
  window.addEventListener("resize", function() {//echarts自带的能随着页面大小自动变化的函数
myChart.resize();
});


//其实是柱状图
var zhuzhaungchart=echarts.init(document.getElementById('zhuzhaung'));
option = {

  legend: {
    top:'5%',
    textStyle:{
    color:'white',
    fontFamily:'宋体',
    fontWeight:'bold'}
  },
    grid:{
      bottom:'18%',
      left:'10%',
      right:'5%'
    },
  tooltip: {},
  dataset: {
    source: [
      ['时间',  '黄色预警', '橙色预警','报警'],
      ['2023/08/15',5,3,3],
      ['2023/08/16',  5,3,3],
      ['2023/08/17', 4, 8,3],
      ['2023/08/18', 7, 5,6],
    ]
  },
  xAxis: { type: 'category',
        axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: "10"
      },
  },
  yAxis: {
      axisLabel: {
        color: "rgba(255,255,255)",
        fontSize: "12"
      },
      splitLine: {
        lineStyle: {
        color: "rgba(255,255,255,.2)"
          }
        },
      // name:'风 险 等 级 统 计 (个)',
      // nameLocation:'middle',
      // nameTextStyle: {
      //   color: 'rgba(255,255,255,.7)',
      //   fontFamily: '微软雅黑',
      //   fontWeight:500,
      //   fontSize: 13,
      //   // padding: [0,0,0,0]
      // },
      //   nameGap: 20

  },
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
      // { type: 'bar' ,itemStyle: {
      //   color: '#00CA94',
      //     barBorderRadius: 3
      //
      // }
      //   },
    { type: 'bar',itemStyle: {
        color: '#DBDB70',
        barBorderRadius: 3
      }
      },
    { type: 'bar',itemStyle: {
        color: '#FFA500',
        barBorderRadius: 3
      }
      },
    { type: 'bar',itemStyle: {
        color: '#FB388F',
        barBorderRadius: 3
      }
    }
    ]
};
zhuzhaungchart.setOption(option);
  window.addEventListener("resize", function() {//echarts自带的能随着页面大小自动变化的函数
zhuzhaungchart.resize();
});



//横着的柱状图
var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
// 1. 实例化对象
var bar2=echarts.init(document.getElementById('bar2'));
// 2. 指定配置和数据
var option = {
  title: {
    top:'5%',
    text: '安全比例',
    left: 'center',
    textStyle:{
      color: '#80FFA5',
        fontFamily: '微软雅黑',
        fontWeight:700,
        fontSize: 14,
    }

  },
grid: {
  top: "15%",
  left: "15%",
  right:"10%",
  bottom: "7.5%"
  // containLabel: true
},
// 不显示x轴的相关信息
xAxis: {
  show: false
},
yAxis: [
  {
    type: "category",
    inverse: true,
    data: ["位移监测", "应力监测", "数值模拟", "微震监测", "多元融合"],
    // 不显示y轴的线
    axisLine: {
      show: false
    },
    // 不显示刻度
    axisTick: {
      show: false
    },
    // 把刻度标签里面的文字颜色设置为白色
    axisLabel: {
      color: "#fff",
      fontFamily:'微软雅黑',
      fontSize:12,
      // fontWeight:'bold'
    }
  },
  {

    data: [702, 350, 610, 793, 664],
    inverse: true,
    // 不显示y轴的线
    axisLine: {
      show: false
    },
    // 不显示刻度
    axisTick: {
      show: false
    },
    // 把刻度标签里面的文字颜色设置为白色
    axisLabel: {
      color: "#fff",
      fontWeight:'bold'
    }
  }
],
series: [
  {
    name: "条",
    type: "bar",
    data: [91, 80, 89, 95, 92],
    yAxisIndex: 0,
    // 修改第一组柱子的圆角
    itemStyle: {
      barBorderRadius: 20,
      // 此时的color 可以修改柱子的颜色
      color: function(params) {
        // params 传进来的是柱子对象
        // console.log(params);
        // dataIndex 是当前柱子的索引号
        return myColor[params.dataIndex];
      }
    },
    // 柱子之间的距离
    barCategoryGap: 2,
    //柱子的宽度
    barWidth: 12,
    // 显示柱子内的文字
    label: {
      show: true,
      position: "inside",
      // {c} 会自动的解析为 数据  data里面的数据
      formatter: "{c}%",
      color:'#fff'
    }
  },
  {
    name: "框",
    type: "bar",
    barCategoryGap: 50,
    barWidth: 12,
    yAxisIndex: 1,
    data: [100, 100, 100, 100, 100],
    itemStyle: {
      color: "none",
      borderColor: "#00c1de",
      borderWidth: 2,
      barBorderRadius: 15
    }
  }
]
};
bar2.setOption(option);
  window.addEventListener("resize", function() {//echarts自带的能随着页面大小自动变化的函数
bar2.resize();
});


  //充数的渐变图
var line=echarts.init(document.getElementById('line'));
var option = {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    top:'2.5%',
    // right:'3%',
    align:'auto',
    data: ['位移', '应力', '压力', '微震'],
    textStyle:{
      color:'white',
      fontSize:12,
    },

    itemGap: 2

  },
  toolbox: {

  },
  grid: {
    top:'20%',
    left: '2%',
    right: '5%',
    bottom: '5%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      axisLabel: {
        color: "rgba(255,255,255)",
        fontSize: "12"
      },
      splitLine: {
        lineStyle: {
        color: "rgba(255,255,255,.2)"}
      },
      type: 'value',
      //  name:'风险数量累计(个)',
      // nameLocation:'end',
      // nameTextStyle: {
      //   color: 'rgba(255,255,255,0.6)',
      //   fontFamily: '微软雅黑',
      //   fontWeight:500,
      //   fontSize: 14,
      //   padding: [0,0,0,20]
      // },
      //   nameGap: 20
    }
  ],
  series: [
    {
      name: '位移',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [140, 232, 101, 264, 90, 340, 250]
    },
    {
      name: '应力',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 282, 111, 234, 220, 340, 310]
    },
    {
      name: '压力',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(55, 162, 255)'
          },
          {
            offset: 1,
            color: 'rgb(116, 21, 219)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 132, 201, 334, 190, 130, 220]
    },
    {
      name: '微震',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 0, 135)'
          },
          {
            offset: 1,
            color: 'rgb(135, 0, 157)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 402, 231, 134, 190, 230, 120]
    },
    // {
    //   name: 'Line 5',
    //   type: 'line',
    //   stack: 'Total',
    //   smooth: true,
    //   lineStyle: {
    //     width: 0
    //   },
    //   showSymbol: false,
    //   label: {
    //     show: true,
    //     position: 'top'
    //   },
    //   areaStyle: {
    //     opacity: 0.8,
    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //       {
    //         offset: 0,
    //         color: 'rgb(255, 191, 0)'
    //       },
    //       {
    //         offset: 1,
    //         color: 'rgb(224, 62, 76)'
    //       }
    //     ])
    //   },
    //   emphasis: {
    //     focus: 'series'
    //   },
    //   data: [220, 302, 181, 234, 210, 290, 150]
    // }
  ]
};
line.setOption(option);
  window.addEventListener("resize", function() {//echarts自带的能随着页面大小自动变化的函数
line.resize();
});




//AQI监测数据图
var AQI=echarts.init(document.getElementById('aqi'));
option = {
  title: {
    text: '',

    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    textStyle:{
      color:'white',
        fontFamily:'宋体',
        fontWeight:'bold',
    },
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '90%',
      label: {
        // fontSize: 12,
        //   fontFamily: '宋体',
        //   color:'white',
        //   borderType:'dotted',
        //
show:false
      },
      labelLine: {

        // length: 15,
        //   lineStyle:{
        //   width:2
        // }
        show: false,

      },
      center:['60%','50%'],
      data: [
        { value: 1048, name: '岩爆' },
        { value: 735, name: '塌方' },
        { value: 580, name: '滑坡' },
        { value: 484, name: '开裂' },
        { value: 300, name: '突水' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
AQI.setOption(option);
  window.addEventListener("resize", function() {//echarts自带的能随着页面大小自动变化的函数
AQI.resize();
});


// $.get('/static/js/aqi-beijing.json', function (data) {
//   AQI.setOption(
//     (option = {
//
//       tooltip: {
//         trigger: 'axis'
//       },
//       grid: {
//         left: '10%',
//         right: '25%',
//         bottom: '30%',
//         top:'8%'
//       },
//       xAxis: {
//         data: data.map(function (item) {
//           return item[0];
//         }),
//         axisLabel: {
//         color: "rgba(255,255,255)",
//         fontSize: "12"
//       },
//       },
//       yAxis: {
//         axisLabel: {
//         color: "rgba(255,255,255)",
//         fontSize: "12"
//       },
//       },
//       toolbox: {
//         right: 10,
//
//       },
//       dataZoom: [
//         {
//           startValue: '2014-06-01'
//         },
//         {
//           type: 'inside',
//           textstyle:{
//             color:'#fff',
//           fontSize:12,
//           fontFamily:'微软雅黑',
//           },
//           bottom:'50%'
//         }
//       ],
//       visualMap: {
//         textStyle:{
//           color:'#fff'
//         },
//         top: '10%',
//         right: '1%',
//         pieces: [
//           {
//             gt: 0,
//             lte: 50,
//             color: '#93CE07'
//           },
//           {
//             gt: 50,
//             lte: 100,
//             color: '#FBDB0F'
//           },
//           {
//             gt: 100,
//             lte: 150,
//             color: '#FC7D02'
//           },
//           {
//             gt: 150,
//             lte: 200,
//             color: '#FD0100'
//           },
//           {
//             gt: 200,
//             lte: 300,
//             color: '#AA069F'
//           },
//           {
//             gt: 300,
//             color: '#AC3B2A'
//           }
//         ],
//         outOfRange: {
//           color: '#999'
//         }
//       },
//       series: {
//         name: 'Beijing AQI',
//         type: 'line',
//         data: data.map(function (item) {
//           return item[1];
//         }),
//         markLine: {
//           silent: true,
//           lineStyle: {
//             color: 'rgba(255,255,255)',
//           },
//
//         }
//       }
//     })
//   );
// });