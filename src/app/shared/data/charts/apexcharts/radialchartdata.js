import { Component } from 'react';
const ReactApexChart = dynamic(() => import("react-apexcharts"), {ssr : false});;
import dynamic from 'next/dynamic';

//Basic Pie Chart

export class Basicradialbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [70],
            options: {
                chart: {
                    height: 300,
                    type: 'radialBar',
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                colors: ["#845adf"],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                labels: ['Cricket'],
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={300} />

        );
    }
}

// Multiple Radialbar Chart

export class Multipleradial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [44, 55, 67, 83],
            options: {
                chart: {
                    height: 280,
                    type: 'radialBar',
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                            },
                            value: {
                                fontSize: '16px',
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                formatter: function (_w) {
                                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                    return '249';
                                }
                            }
                        }
                    }
                },
                colors: ["#845adf", "#23b7e5", "#f5b849", "#e6533c"],
                labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={300} />

        );
    }
}

// Circle Chart - Custom Angle

export class Circlechart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [76, 67, 61, 90],
            options: {
                chart: {
                    height: 100,
                    type: 'radialBar',
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 5,
                            size: '30%',
                            background: 'transparent',
                            image: undefined,
                        },
                        dataLabels: {
                            name: {
                                show: false,
                            },
                            value: {
                                show: false,
                            }
                        }
                    }
                },
                colors: ['#845adf', '#23b7e5', '#f5b849', '#e6533c'],
                labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
                legend: {
                    show: true,
                    floating: true,
                    fontSize: '14px',
                    position: 'left',
                    labels: {
                        useSeriesColors: true,
                    },
                    formatter: function (seriesName, opts) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
                    },
                    itemMargin: {
                        vertical: 3
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false
                        }
                    }
                }]
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={320} />

        );
    }
}

// Stroked Circular Gauge

export class Gradientcircle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [75],
            options: {
                chart: {
                    height: 320,
                    type: 'radialBar',
                    toolbar: {
                        show: true
                    },
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 225,
                        hollow: {
                            margin: 0,
                            size: '70%',
                            background: '#fff',
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: 'front',
                            dropShadow: {
                                enabled: true,
                                top: 3,
                                left: 0,
                                blur: 4,
                                opacity: 0.24
                            }
                        },
                        track: {
                            background: '#fff',
                            strokeWidth: '67%',
                            margin: 0, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: -3,
                                left: 0,
                                blur: 4,
                                opacity: 0.35
                            }
                        },

                        dataLabels: {
                            show: true,
                            name: {
                                offsetY: -10,
                                show: true,
                                color: '#888',
                                fontSize: '17px'
                            },
                            value: {
                                formatter: function (val) {
                                    // return parseInt(val);
                                    return val.toString();
                                },
                                color: '#111',
                                fontSize: '36px',
                                show: true,
                            }
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: 'horizontal',
                        shadeIntensity: 0.5,
                        gradientToColors: ['#23b7e5'],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    }
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: ['Percent'],
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={320} />

        );
    }
}

// Stroked Circular Gauge

export class Circlegauge extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [67],
            options: {
                chart: {
                    height: 320,
                    type: 'radialBar',
                    offsetY: -10,
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                colors: ["#845adf"],
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 135,
                        dataLabels: {
                            name: {
                                fontSize: '16px',
                                color: undefined,
                                offsetY: 120
                            },
                            value: {
                                offsetY: 76,
                                fontSize: '22px',
                                color: undefined,
                                formatter: function (val) {
                                    return val + "%";
                                }
                            }
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        shadeIntensity: 0.15,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 65, 91]
                    },
                },
                stroke: {
                    dashArray: 4
                },
                labels: ['Median Ratio'],
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={320} />

        );
    }
}

// Circle Chart With Image

export class Circlewithimage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [67],
            options: {
                chart: {
                    height: 330,
                    type: 'radialBar',
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 15,
                            size: '70%',
                            imageWidth: 32,
                            imageHeight: 32,
                            imageClipped: false
                        },
                        dataLabels: {
                            name: {
                                show: false,
                                color: '#fff'
                            },
                            value: {
                                show: true,
                                color: '#333',
                                offsetY: 10,
                                fontSize: '22px'
                            }
                        }
                    }
                },
                fill: {
                    type: 'image',
                    image: {
                        src: ["../../../../assets/images/media/media-64.jpg"],
                    }
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: ['Volatility'],
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={320} />

        );
    }
}

// Semi Circular Gauge

export class Semicirclegauge extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [76],
            options: {
                chart: {
                    type: 'radialBar',
                    height: 320,
                    offsetY: -20,
                    sparkline: {
                        enabled: true
                    },
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        track: {
                            background: "#fff",
                            strokeWidth: '97%',
                            margin: 5, // margin is in pixels
                            dropShadow: {
                                enabled: false,
                                top: 2,
                                left: 0,
                                color: '#999',
                                opacity: 1,
                                blur: 2
                            }
                        },
                        dataLabels: {
                            name: {
                                show: false
                            },
                            value: {
                                offsetY: -2,
                                fontSize: '22px'
                            }
                        }
                    }
                },
                colors: ["#845adf"],
                grid: {
                    padding: {
                        top: -10
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        shadeIntensity: 0.4,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 53, 91]
                    },
                },
                labels: ['Average Results'],
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={320} />

        );
    }
}