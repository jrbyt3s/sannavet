import { Component } from 'react';
const ReactApexChart = dynamic(() => import("react-apexcharts"), {ssr : false});;
import dynamic from 'next/dynamic';

//Basic Radar Chart

export class Basicradar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            }],
            options: {
                chart: {
                    height: 320,
                    type: 'radar',
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                title: {
                    text: 'Basic Radar Chart',
                    align: 'left',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                colors: ["#845adf"],
                xaxis: {
                    categories: ['January', 'February', 'March', 'April', 'May', 'June']
                }
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={320} />

        );
    }
}

// Radar Chart-Multiple Series

export class Multipleradar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            }, {
                name: 'Series 2',
                data: [20, 30, 40, 80, 20, 80],
            }, {
                name: 'Series 3',
                data: [44, 76, 78, 13, 43, 10],
            }],
            options: {
                chart: {
                    height: 320,
                    type: 'radar',
                    dropShadow: {
                        enabled: true,
                        blur: 1,
                        left: 1,
                        top: 1
                    },
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                title: {
                    text: 'Radar Chart - Multi Series',
                    align: 'left',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                colors: ["#845adf", "#23b7e5", "#f5b849"],
                stroke: {
                    width: 2
                },
                fill: {
                    opacity: 0.1
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    categories: ['2011', '2012', '2013', '2014', '2015', '2016']
                }
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={320} />

        );
    }
}

// Radar Chart Poygon Fill

export class Polygonradar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Series 1',
                data: [20, 100, 40, 30, 50, 80, 33],
            }],
            options: {
                chart: {
                    height: 320,
                    type: 'radar',
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                dataLabels: {
                    enabled: true
                },
                plotOptions: {
                    radar: {
                        size: 80,
                        polygons: {
                            strokeColors: '#e9e9e9',
                        }
                    }
                },
                title: {
                    text: 'Radar with Polygon Fill',
                    align: 'left',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                colors: ['#23b7e5'],
                markers: {
                    size: 4,
                    colors: ['#fff'],
                    // strokeColor: ['#23b7e5'],
                    strokeWidth: 2,
                },
                tooltip: {
                    y: {
                        formatter: (val) => {
                            return val.toString(); // Convert to string
                        }
                    }
                },
                xaxis: {
                    categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
                },
                yaxis: {
                    tickAmount: 7,
                    labels: {
                        formatter: (val, i) => {
                            if (i % 2 === 0) {
                                return val.toString(); // Convert to string
                            } else {
                                return '';
                            }
                        }
                    }
                }
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={320} />

        );
    }
}