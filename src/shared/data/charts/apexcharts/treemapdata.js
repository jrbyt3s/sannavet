import { Component } from 'react';
const ReactApexChart = dynamic(() => import("react-apexcharts"), {ssr : false});;
import dynamic from 'next/dynamic';

//Basic Treemap Chart

export class Basictreemap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    data: [
                        {
                            x: 'New Delhi',
                            y: 218
                        },
                        {
                            x: 'Kolkata',
                            y: 149
                        },
                        {
                            x: 'Mumbai',
                            y: 184
                        },
                        {
                            x: 'Ahmedabad',
                            y: 55
                        },
                        {
                            x: 'Bangaluru',
                            y: 84
                        },
                        {
                            x: 'Pune',
                            y: 31
                        },
                        {
                            x: 'Chennai',
                            y: 70
                        },
                        {
                            x: 'Jaipur',
                            y: 30
                        },
                        {
                            x: 'Surat',
                            y: 44
                        },
                        {
                            x: 'Hyderabad',
                            y: 68
                        },
                        {
                            x: 'Lucknow',
                            y: 28
                        },
                        {
                            x: 'Indore',
                            y: 19
                        },
                        {
                            x: 'Kanpur',
                            y: 29
                        }
                    ]
                }
            ],
            options: {
                legend: {
                    show: false
                },
                chart: {
                    height: 350,
                    type: 'treemap',
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                colors: ["#845adf"],
                title: {
                    text: 'Basic Treemap',
                    align: 'left',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="treemap" height={350} />

        );
    }
}

//Multi Dimensional Treemap Chart

export class Multidimensional extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: 'Desktops',
                    data: [
                        {
                            x: 'ABC',
                            y: 10
                        },
                        {
                            x: 'DEF',
                            y: 60
                        },
                        {
                            x: 'XYZ',
                            y: 41
                        }
                    ]
                },
                {
                    name: 'Mobile',
                    data: [
                        {
                            x: 'ABCD',
                            y: 10
                        },
                        {
                            x: 'DEFG',
                            y: 20
                        },
                        {
                            x: 'WXYZ',
                            y: 51
                        },
                        {
                            x: 'PQR',
                            y: 30
                        },
                        {
                            x: 'MNO',
                            y: 20
                        },
                        {
                            x: 'CDE',
                            y: 30
                        }
                    ]
                }
            ],
            options: {
                colors: ["#845adf", "#23b7e5"],
                legend: {
                    show: false
                },
                chart: {
                    height: 350,
                    type: 'treemap',
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                title: {
                    text: 'Multi-dimensional Treemap',
                    align: 'center',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="treemap" height={350} />

        );
    }
}

//Distributed Treemap Chart

export class Distributedtree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    data: [
                        {
                            x: 'New Delhi',
                            y: 218
                        },
                        {
                            x: 'Kolkata',
                            y: 149
                        },
                        {
                            x: 'Mumbai',
                            y: 184
                        },
                        {
                            x: 'Ahmedabad',
                            y: 55
                        },
                        {
                            x: 'Bangaluru',
                            y: 84
                        },
                        {
                            x: 'Pune',
                            y: 31
                        },
                        {
                            x: 'Chennai',
                            y: 70
                        },
                        {
                            x: 'Jaipur',
                            y: 30
                        },
                        {
                            x: 'Surat',
                            y: 44
                        },
                        {
                            x: 'Hyderabad',
                            y: 68
                        },
                        {
                            x: 'Lucknow',
                            y: 28
                        },
                        {
                            x: 'Indore',
                            y: 19
                        },
                        {
                            x: 'Kanpur',
                            y: 29
                        }
                    ]
                }
            ],
            options: {
                legend: {
                    show: false
                },
                chart: {
                    height: 350,
                    type: 'treemap',
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                title: {
                    text: 'Distibuted Treemap (different color for each cell)',
                    align: 'center',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                colors: [
                    '#845adf',
                    '#a65e76',
                    '#f5b849',
                    '#a66a5e',
                    '#a65e9a',
                    '#26bf94',
                    '#e6533c',
                    '#49b6f5',
                    '#5b67c7',
                    '#2dce89',
                    '#EF6537',
                    '#8c9097'
                ],
                plotOptions: {
                    treemap: {
                        distributed: true,
                        enableShades: false
                    }
                }
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="treemap" height={350} />

        );
    }
}

//Treemap with color ranges

export class Colorrangetree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    data: [
                        {
                            x: 'INTC',
                            y: 1.2
                        },
                        {
                            x: 'GS',
                            y: 0.4
                        },
                        {
                            x: 'CVX',
                            y: -1.4
                        },
                        {
                            x: 'GE',
                            y: 2.7
                        },
                        {
                            x: 'CAT',
                            y: -0.3
                        },
                        {
                            x: 'RTX',
                            y: 5.1
                        },
                        {
                            x: 'CSCO',
                            y: -2.3
                        },
                        {
                            x: 'JNJ',
                            y: 2.1
                        },
                        {
                            x: 'PG',
                            y: 0.3
                        },
                        {
                            x: 'TRV',
                            y: 0.12
                        },
                        {
                            x: 'MMM',
                            y: -2.31
                        },
                        {
                            x: 'NKE',
                            y: 3.98
                        },
                        {
                            x: 'IYT',
                            y: 1.67
                        }
                    ]
                }
            ],
            options: {
                legend: {
                    show: false
                },
                chart: {
                    height: 350,
                    type: 'treemap',
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                title: {
                    text: 'Treemap with Color scale',
                    align: 'left',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                dataLabels: {
                    enabled: true,
                    style: {
                        fontSize: '12px',
                    },
                    offsetY: -4
                },
                plotOptions: {
                    treemap: {
                        enableShades: true,
                        shadeIntensity: 0.5,
                        reverseNegativeShade: true,
                        colorScale: {
                            ranges: [
                                {
                                    from: -6,
                                    to: 0,
                                    color: '#845adf'
                                },
                                {
                                    from: 0.001,
                                    to: 6,
                                    color: '#23b7e5'
                                }
                            ]
                        }
                    }
                }
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="treemap" height={350} />

        );
    }
}