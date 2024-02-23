import dynamic from "next/dynamic";
import * as echarts from 'echarts'
const ReactEcharts = dynamic(() => import("echarts-for-react"), { ssr: false });

export function Basicechart() {
    const options = {
      grid: {
        left: "0%",
        right: "0%",
        bottom: "0%",
        top: "10%",
        containLabel: true,
      },
      splitLine: {
        lineStyle: {
          color: "rgba(142, 156, 173,0.1)",
        },
      },
      axisLine: {
        lineStyle: {
          color: "#8c9097",
        },
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisLine: {
          lineStyle: {
            color: "#8c9097",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(142, 156, 173,0.1)",
          },
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          lineStyle: {
            color: "#8c9097",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(142, 156, 173,0.1)",
          },
        },
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
      color: "#845adf",
    };
  
    return <ReactEcharts className="chartsh" option={options} />;
  }
  export function Smoothedechart() {
    const options = {
      grid: {
        left: "0%",
        right: "0%",
        bottom: "0%",
        top: "10%",
        containLabel: true,
      },
      splitLine: {
        lineStyle: {
          color: "rgba(142, 156, 173,0.1)",
        },
      },
      axisLine: {
        lineStyle: {
          color: "#8c9097",
        },
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisLine: {
          lineStyle: {
            color: "#8c9097",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(142, 156, 173,0.1)",
          },
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          lineStyle: {
            color: "#8c9097",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(142, 156, 173,0.1)",
          },
        },
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
        },
      ],
      color: "#845adf",
    };
  
    return <ReactEcharts className="chartsh" option={options} />;
  }
  export function Basicareaechart() {
    const option = {
        grid: {
            left: "0%",
            right: "0%",
            bottom: "0%",
            top: "10%",
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                lineStyle: {
                    color: "#8c9097"
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: "#8c9097"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(142, 156, 173,0.1)"
                }
            }
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }
        ],
        color: "#845adf"
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
export function Stackedline() {
    const option = {
        grid: {
            left: "0%",
            right: "0%",
            bottom: "0%",
            top: "10%",
            containLabel: true
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
            textStyle: {
                color: '#777'
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                lineStyle: {
                    color: "#8c9097"
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: "#8c9097"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(142, 156, 173,0.1)"
                }
            }
        },
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ],
        color: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"]
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
export function Stackedarea() {
    const option = {
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
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
            textStyle: {
                color: '#777'
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '10%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLine: {
                    lineStyle: {
                        color: "#8c9097"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: "#8c9097"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(142, 156, 173,0.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ],
        color: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"]
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
export function Steplineechart() {
    const option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Step Start', 'Step Middle', 'Step End'],
            textStyle: {
                color: '#777'
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '10%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                lineStyle: {
                    color: "#8c9097"
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: "#8c9097"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(142, 156, 173,0.1)"
                }
            }
        },
        series: [
            {
                name: 'Step Start',
                type: 'line',
                step: 'start',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Step Middle',
                type: 'line',
                step: 'middle',
                data: [220, 282, 201, 234, 290, 430, 410]
            },
            {
                name: 'Step End',
                type: 'line',
                step: 'end',
                data: [450, 432, 401, 454, 590, 530, 510]
            }
        ],
        color: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5", "#e6533c"]
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
export function Basicbarechart() {
    const option = {
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                lineStyle: {
                    color: "#8c9097"
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: "#8c9097"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(142, 156, 173,0.1)"
                }
            }
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }
        ],
        color: "#845adf"
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
export function Backgroundechart() {
    const option = {
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                lineStyle: {
                    color: "#8c9097"
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: "#8c9097"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(142, 156, 173,0.1)"
                }
            }
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ],
        color: "#845adf"
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
export function Singlebarechart() {
    const option = {
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                lineStyle: {
                    color: "#8c9097"
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: "#8c9097"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(142, 156, 173,0.1)"
                }
            }
        },
        series: [
            {
                data: [
                    120,
                    {
                        value: 200,
                        itemStyle: {
                            color: '#23b7e5'
                        }
                    },
                    150,
                    80,
                    70,
                    110,
                    130
                ],
                type: 'bar'
            }
        ],
        color: "#845adf"
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
export function Waterfallechart() {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function (params) {
                var tar = params[1];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            splitLine: { show: false },
            data: ['Total', 'Rent', 'Utilities', 'Transportation', 'Meals', 'Other'],
            axisLine: {
                lineStyle: {
                    color: "#8c9097"
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: "#8c9097"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(142, 156, 173,0.1)"
                }
            }
        },
        series: [
            {
                name: 'Placeholder',
                type: 'bar',
                stack: 'Total',
                itemStyle: {
                    borderColor: 'transparent',
                    color: 'transparent'
                },
                emphasis: {
                    itemStyle: {
                        borderColor: 'transparent',
                        color: 'transparent'
                    }
                },
                data: [0, 1700, 1400, 1200, 300, 0]
            },
            {
                name: 'Life Cost',
                type: 'bar',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'inside'
                },
                data: [2900, 1200, 300, 200, 900, 300]
            }
        ],
        color: "#845adf"
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
const labelRight = {
    position: 'right'
};
export function Negativeechart() {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            position: 'top',
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: "rgba(142, 156, 173,0.1)"
                }
            }
        },
        yAxis: {
            type: 'category',
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#8c9097"
                }
            },
            axisLabel: { show: false },
            axisTick: { show: false },
            splitLine: {
                show: false,
                lineStyle: {
                    color: "rgba(142, 156, 173,0.1)"
                }
            },
            data: [
                'ten',
                'nine',
                'eight',
                'seven',
                'six',
                'five',
                'four',
                'three',
                'two',
                'one'
            ],
            // axisLine: {
            //     lineStyle: {
            //         color: "#8c9097"
            //     }
            // },
            // splitLine: {
            //     lineStyle: {
            //         color: "rgba(142, 156, 173,0.1)"
            //     }
            // }
        },
        series: [
            {
                name: 'Cost',
                type: 'bar',
                stack: 'Total',
                label: {
                    show: true,
                    formatter: '{b}'
                },
                data: [
                    { value: -0.07, label: labelRight },
                    { value: -0.09, label: labelRight },
                    0.2,
                    0.44,
                    { value: -0.23, label: labelRight },
                    0.08,
                    { value: -0.17, label: labelRight },
                    0.47,
                    { value: -0.36, label: labelRight },
                    0.18
                ]
            }
        ],
        color: "#845adf"
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
var app = {};
var option;
const posList = [
    'left',
    'right',
    'top',
    'bottom',
    'inside',
    'insideTop',
    'insideLeft',
    'insideRight',
    'insideBottom',
    'insideTopLeft',
    'insideTopRight',
    'insideBottomLeft',
    'insideBottomRight'
];
app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: posList.reduce(function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};
app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
        const labelOption = {
            rotate: app.config.rotate,
            align: app.config.align,
            verticalAlign: app.config.verticalAlign,
            position: app.config.position,
            distance: app.config.distance
        };
        myChart.setOption({
            series: [
                {
                    label: labelOption
                },
                {
                    label: labelOption
                },
                {
                    label: labelOption
                },
                {
                    label: labelOption
                }
            ]
        });
    }
};
const labelOption = {
    show: true,
    position: app.config.position,
    distance: app.config.distance,
    align: app.config.align,
    verticalAlign: app.config.verticalAlign,
    rotate: app.config.rotate,
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
        name: {}
    }
};
export function Barwithlabels() {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['Forest', 'Steppe', 'Desert', 'Wetland'],
            textStyle: {
                color: '#777'
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '10%',
            containLabel: true
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar', 'stack'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        xAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                data: ['2012', '2013', '2014', '2015', '2016'],
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: "rgba(142, 156, 173,0.1)"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: "#8c9097"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(142, 156, 173,0.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: 'Forest',
                type: 'bar',
                barGap: 0,
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390]
            },
            {
                name: 'Steppe',
                type: 'bar',
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290]
            },
            {
                name: 'Desert',
                type: 'bar',
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190]
            },
            {
                name: 'Wetland',
                type: 'bar',
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [98, 77, 101, 99, 40]
            }
        ],
        color: ["#845adf", "#23b7e5", "#f5b849", "#e6533c"]
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
export function Horizontalechart() {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            textStyle: {
                color: '#777'
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: "rgba(142, 156, 173,0.1)"
                }
            }
        },
        yAxis: {
            type: 'category',
            data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
            axisLine: {
                lineStyle: {
                    color: "#8c9097"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(142, 156, 173,0.1)"
                }
            }
        },
        series: [
            {
                name: '2011',
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230]
            },
            {
                name: '2012',
                type: 'bar',
                data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
        ],
        color: ["#845adf", "#23b7e5"]
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
export function Horizontalstackechart() {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        legend: {
            textStyle: {
                color: '#777'
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '20%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: "rgba(142, 156, 173,0.1)"
                }
            }
        },
        yAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                lineStyle: {
                    color: "#8c9097"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(142, 156, 173,0.1)"
                }
            }
        },
        series: [
            {
                name: 'Direct',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                name: 'Mail Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Affiliate Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
                name: 'Search Engine',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
        ],
        color: ["#845adf", "#23b7e5", "#f5b849", "#e6533c", "#49b6f5"]
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
export function Pieechart() {
    const option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#777'
            }
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ],
        color: ["#845adf", "#23b7e5", "#f5b849", "#e6533c", "#49b6f5"]
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
export function Doughnutchart() {
    const option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '0%',
            left: 'center',
            textStyle: {
                color: '#777'
            }
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '17',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
            }
        ],
        color: ["#845adf", "#23b7e5", "#f5b849", "#e6533c", "#49b6f5"]
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
export function Basicscatter() {
    const option = {
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: "rgba(142, 156, 173,0.1)"
                }
            }
        },
        yAxis: {
            axisLine: {
                lineStyle: {
                    color: "#8c9097"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(142, 156, 173,0.1)"
                }
            }
        },
        series: [
            {
                symbolSize: 20,
                data: [
                    [10.0, 8.04],
                    [8.07, 6.95],
                    [13.0, 7.58],
                    [9.05, 8.81],
                    [11.0, 8.33],
                    [14.0, 7.66],
                    [13.4, 6.81],
                    [10.0, 6.33],
                    [14.0, 8.96],
                    [12.5, 6.82],
                    [9.15, 7.2],
                    [11.5, 7.2],
                    [3.03, 4.23],
                    [12.2, 7.83],
                    [2.02, 4.47],
                    [1.05, 3.33],
                    [4.05, 4.96],
                    [6.03, 7.24],
                    [12.0, 6.26],
                    [12.0, 8.84],
                    [7.08, 5.82],
                    [5.02, 5.68]
                ],
                type: 'scatter'
            }
        ],
        color: ["#845adf"]
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
const data = [
    [
        [28604, 77, 17096869, 'Australia', 1990],
        [31163, 77.4, 27662440, 'Canada', 1990],
        [1516, 68, 1154605773, 'China', 1990],
        [13670, 74.7, 10582082, 'Cuba', 1990],
        [28599, 75, 4986705, 'Finland', 1990],
        [29476, 77.1, 56943299, 'France', 1990],
        [31476, 75.4, 78958237, 'Germany', 1990],
        [28666, 78.1, 254830, 'Iceland', 1990],
        [1777, 57.7, 870601776, 'India', 1990],
        [29550, 79.1, 122249285, 'Japan', 1990],
        [2076, 67.9, 20194354, 'North Korea', 1990],
        [12087, 72, 42972254, 'South Korea', 1990],
        [24021, 75.4, 3397534, 'New Zealand', 1990],
        [43296, 76.8, 4240375, 'Norway', 1990],
        [10088, 70.8, 38195258, 'Poland', 1990],
        [19349, 69.6, 147568552, 'Russia', 1990],
        [10670, 67.3, 53994605, 'Turkey', 1990],
        [26424, 75.7, 57110117, 'United Kingdom', 1990],
        [37062, 75.4, 252847810, 'United States', 1990]
    ],
    [
        [44056, 81.8, 23968973, 'Australia', 2015],
        [43294, 81.7, 35939927, 'Canada', 2015],
        [13334, 76.9, 1376048943, 'China', 2015],
        [21291, 78.5, 11389562, 'Cuba', 2015],
        [38923, 80.8, 5503457, 'Finland', 2015],
        [37599, 81.9, 64395345, 'France', 2015],
        [44053, 81.1, 80688545, 'Germany', 2015],
        [42182, 82.8, 329425, 'Iceland', 2015],
        [5903, 66.8, 1311050527, 'India', 2015],
        [36162, 83.5, 126573481, 'Japan', 2015],
        [1390, 71.4, 25155317, 'North Korea', 2015],
        [34644, 80.7, 50293439, 'South Korea', 2015],
        [34186, 80.6, 4528526, 'New Zealand', 2015],
        [64304, 81.6, 5210967, 'Norway', 2015],
        [24787, 77.3, 38611794, 'Poland', 2015],
        [23038, 73.13, 143456918, 'Russia', 2015],
        [19360, 76.5, 78665830, 'Turkey', 2015],
        [38225, 81.4, 64715810, 'United Kingdom', 2015],
        [53354, 79.1, 321773631, 'United States', 2015]
    ]
];
export function Bubblechart() {
    const option = {
        backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
            {
                offset: 0,
                color: 'transparent'
            },
            {
                offset: 1,
                color: 'transparent'
            }
        ]),
        legend: {
            right: '10%',
            top: '3%',
            data: ['1990', '2015'],
            textStyle: {
                color: '#777'
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '10%'
        },
        xAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: "rgba(142, 156, 173,0.1)"
                }
            }
        },
        yAxis: {
            axisLine: {
                lineStyle: {
                    color: "#8c9097"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(142, 156, 173,0.1)"
                }
            },
            scale: true
        },
        series: [
            {
                name: '1990',
                data: data[0],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                emphasis: {
                    focus: 'series',
                    label: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(25, 100, 150, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                        {
                            offset: 0,
                            color: 'rgb(94, 154, 166)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(94, 154, 166)'
                        }
                    ])
                }
            },
            {
                name: '2015',
                data: data[1],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                emphasis: {
                    focus: 'series',
                    label: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                        {
                            offset: 0,
                            color: 'rgb(185, 93, 75)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(185, 93, 75)'
                        }
                    ])
                }
            }
        ],
        color: ["#49b6f5", "#e6533c"]
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
// Candlestickechart Chart
export function Candlestickechart() {
    const option = {
        grid: {
            left: '5%',
            right: '0%',
            bottom: '10%',
            top: '10%'
        },
        xAxis: {
            data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27'],
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: "rgba(142, 156, 173,0.1)"
                }
            }
        },
        yAxis: {
            axisLine: {
                lineStyle: {
                    color: "#8c9097"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(142, 156, 173,0.1)"
                }
            },
        },
        series: [
            {
                type: 'candlestick',
                data: [
                    [20, 34, 10, 38],
                    [40, 35, 30, 50],
                    [31, 38, 33, 44],
                    [38, 15, 5, 42]
                ],
                itemStyle: {
                    normal: {
                        color: "#845adf",
                        color0: "#23b7e5",
                        borderColor: "#845adf",
                        borderColor0: "#23b7e5",
                    }
                }
            }
        ]
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
// Basicradarechart Chart
export function Basicradarechart() {
    const option = {
        legend: {
            data: ['Allocated Budget', 'Actual Spending'],
            left: '0%',
            top: '0%',
            textStyle: {
                color: '#777'
            }
        },
        radar: {
            indicator: [
                { name: 'Sales', max: 6500 },
                { name: 'Administration', max: 16000 },
                { name: 'Information Technology', max: 30000 },
                { name: 'Customer Support', max: 38000 },
                { name: 'Development', max: 52000 },
                { name: 'Marketing', max: 25000 }
            ]
        },
        series: [
            {
                name: 'Budget vs spending',
                type: 'radar',
                data: [
                    {
                        value: [4200, 3000, 20000, 35000, 50000, 18000],
                        name: 'Allocated Budget'
                    },
                    {
                        value: [5000, 14000, 28000, 26000, 42000, 21000],
                        name: 'Actual Spending'
                    }
                ]
            }
        ],
        color: ["#845adf", "#23b7e5"]
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
// Heatmapechart Chart
function getVirtulData(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate(+year + 1 + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
}
export function Heatmapechart() {
    const option = {
        title: {
            top: 30,
            left: 'center',
            text: 'Daily Step Count'
        },
        tooltip: {},
        visualMap: {
            min: 0,
            max: 10000,
            type: 'piecewise',
            orient: 'horizontal',
            left: 'center',
            top: 65
        },
        calendar: {
            top: 120,
            left: 30,
            right: 30,
            cellSize: ['auto', 13],
            range: '2016',
            itemStyle: {
                borderWidth: 0.5
            },
            yearLabel: { show: false }
        },
        series: {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: getVirtulData('2016')
        }
    }

    return <ReactEcharts className="chartsh" option={option} />;
}

// Treemapechart Chart
export function Treemapechart() {
    const option = {
        series: [
            {
                type: 'treemap',
                data: [
                    {
                        name: 'nodeA',
                        value: 10,
                        children: [
                            {
                                name: 'nodeAa',
                                value: 4
                            },
                            {
                                name: 'nodeAb',
                                value: 6
                            }
                        ]
                    },
                    {
                        name: 'nodeB',
                        value: 20,
                        children: [
                            {
                                name: 'nodeBa',
                                value: 20,
                                children: [
                                    {
                                        name: 'nodeBa1',
                                        value: 20
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        color: ["#845adf", "#23b7e5"]
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
// Funnelechart Chart
export function Funnelechart() {
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        legend: {
            data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'],
            textStyle: {
                color: '#777'
            }
        },
        series: [
            {
                name: 'Funnel',
                type: 'funnel',
                left: '10%',
                top: 60,
                bottom: 60,
                width: '80%',
                min: 0,
                max: 100,
                minSize: '0%',
                maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: {
                    show: true,
                    position: 'inside'
                },
                labelLine: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                },
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                        fontSize: 20
                    }
                },
                data: [
                    { value: 60, name: 'Visit' },
                    { value: 40, name: 'Inquiry' },
                    { value: 20, name: 'Order' },
                    { value: 80, name: 'Click' },
                    { value: 100, name: 'Show' }
                ]
            }
        ],
        color: ["#845adf", "#23b7e5", "#f5b849", "#e6533c", "#49b6f5"]
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
// Gaugeechart Chart
export function Gaugeechart() {
    const option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
            {
                name: 'Pressure',
                type: 'gauge',
                progress: {
                    show: true
                },
                detail: {
                    valueAnimation: true,
                    formatter: '{value}'
                },
                data: [
                    {
                        value: 50,
                        name: 'SCORE'
                    }
                ]
            }
        ],
        color: ["#845adf"]
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
//Simplegraphechart Chart
export function Simplegraph() {
    const option = {
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                type: 'graph',
                layout: 'none',
                symbolSize: 50,
                roam: true,
                label: {
                    show: true
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                edgeLabel: {
                    fontSize: 20
                },
                data: [
                    {
                        name: 'Node 1',
                        x: 300,
                        y: 300
                    },
                    {
                        name: 'Node 2',
                        x: 800,
                        y: 300
                    },
                    {
                        name: 'Node 3',
                        x: 550,
                        y: 100
                    },
                    {
                        name: 'Node 4',
                        x: 550,
                        y: 500
                    }
                ],
                links: [
                    {
                        source: 0,
                        target: 1,
                        symbolSize: [5, 20],
                        label: {
                            show: true
                        },
                        lineStyle: {
                            width: 5,
                            curveness: 0.2
                        }
                    },
                    {
                        source: 'Node 2',
                        target: 'Node 1',
                        label: {
                            show: true
                        },
                        lineStyle: {
                            curveness: 0.2
                        }
                    },
                    {
                        source: 'Node 1',
                        target: 'Node 3'
                    },
                    {
                        source: 'Node 2',
                        target: 'Node 3'
                    },
                    {
                        source: 'Node 2',
                        target: 'Node 4'
                    },
                    {
                        source: 'Node 1',
                        target: 'Node 4'
                    }
                ],
                lineStyle: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                }
            }
        ],
        color: ["#845adf"]
    }

    return <ReactEcharts className="chartsh" option={option} />;
}
