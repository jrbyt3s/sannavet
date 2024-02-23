
import { Component } from 'react';
const ReactApexChart = dynamic(() => import("react-apexcharts"), {ssr : false});;
import dynamic from 'next/dynamic';

//Simple Bubble Chart

function generateData(baseval, count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
        const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([x, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}
export class Simplebubble extends Component {
    constructor (props) {
      super(props);
  
      this.state = {  
        series: [{
            name: 'Bubble1',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Bubble2',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Bubble3',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Bubble4',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        }],
        options: {
            chart: {
                height: 320,
                type: 'bubble',
                events: {
                    mounted: (chart) => {
                      chart.windowResizeHandler();
                    }
                  },
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                opacity: 0.8
            },
            grid: {
                borderColor: '#f2f5f7',
            },
            title: {
                text: 'Simple Bubble Chart',
                align: 'left',
                style: {
                    fontSize: '13px',
                    fontWeight: 'bold',
                    color: '#8c9097'
                },
            },
            colors: ["#845adf", "#23b7e5", "#f5b849"],
            xaxis: {
                tickAmount: 12,
                type: 'category',
                labels: {
                    show: true,
                    style: {
                        colors: "#8c9097",
                        fontSize: '11px',
                        fontWeight: 600,
                        cssClass: 'apexcharts-xaxis-label',
                    },
                }
            },
            yaxis: {
                max: 70,
                labels: {
                    show: true,
                    style: {
                        colors: "#8c9097",
                        fontSize: '11px',
                        fontWeight: 600,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                }
            }
        }
  
      };
    }
  
    render () {
      return (
                <ReactApexChart options={this.state.options} series={this.state.series} type="bubble" height={350} />
  
      );
    }
}

//3D Bubble Chart

export class Bubble3D extends Component {
    constructor (props) {
      super(props);
  
      this.state = {  
        series: [{
            name: 'Product1',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Product2',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Product3',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Product4',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        }],
        options: {
            chart: {
                height: 320,
                type: 'bubble',
                events: {
                    mounted: (chart) => {
                      chart.windowResizeHandler();
                    }
                  },
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'gradient',
            },
            grid: {
                borderColor: '#f2f5f7',
            },
            colors: ["#845adf", "#23b7e5", "#f5b849"],
            title: {
                text: '3D Bubble Chart',
                align: 'left',
                style: {
                    fontSize: '13px',
                    fontWeight: 'bold',
                    color: '#8c9097'
                },
            },
            xaxis: {
                tickAmount: 12,
                type: 'datetime',
                labels: {
                    rotate: 0,
                    style: {
                        colors: "#8c9097",
                        fontSize: '11px',
                        fontWeight: 600,
                        cssClass: 'apexcharts-xaxis-label',
                    },
                }
            },
            yaxis: {
                max: 70,
                labels: {
                    show: true,
                    style: {
                        colors: "#8c9097",
                        fontSize: '11px',
                        fontWeight: 600,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                }
            },
            theme: {
                palette: 'palette2'
            }
  
      }
    };
    }
  
    render () {
      return (
                <ReactApexChart options={this.state.options} series={this.state.series} type="bubble" height={350} />
  
      );
    }
}