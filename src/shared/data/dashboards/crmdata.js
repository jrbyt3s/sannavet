import dynamic from "next/dynamic";
import { Component } from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

//Revenur Analytics

export class Revenueanalytics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    type: 'line',
                    name: 'Profit',
                    data: [
                        {
                            x: 'Jan',
                            y: 100
                        },
                        {
                            x: 'Feb',
                            y: 210
                        },
                        {
                            x: 'Mar',
                            y: 180
                        },
                        {
                            x: 'Apr',
                            y: 454
                        },
                        {
                            x: 'May',
                            y: 230
                        },
                        {
                            x: 'Jun',
                            y: 320
                        },
                        {
                            x: 'Jul',
                            y: 656
                        },
                        {
                            x: 'Aug',
                            y: 830
                        },
                        {
                            x: 'Sep',
                            y: 350
                        },
                        {
                            x: 'Oct',
                            y: 350
                        },
                        {
                            x: 'Nov',
                            y: 210
                        },
                        {
                            x: 'Dec',
                            y: 410
                        }
                    ]
                },
                {
                    type: 'line',
                    name: 'Revenue',
                    data: [
                        {
                            x: 'Jan',
                            y: 180
                        },
                        {
                            x: 'Feb',
                            y: 620
                        },
                        {
                            x: 'Mar',
                            y: 476
                        },
                        {
                            x: 'Apr',
                            y: 220
                        },
                        {
                            x: 'May',
                            y: 520
                        },
                        {
                            x: 'Jun',
                            y: 780
                        },
                        {
                            x: 'Jul',
                            y: 435
                        },
                        {
                            x: 'Aug',
                            y: 515
                        },
                        {
                            x: 'Sep',
                            y: 738
                        },
                        {
                            x: 'Oct',
                            y: 454
                        },
                        {
                            x: 'Nov',
                            y: 525
                        },
                        {
                            x: 'Dec',
                            y: 230
                        }
                    ]
                },
                {
                    type: 'area',
                    name: 'Sales',
                    data: [
                        {
                            x: 'Jan',
                            y: 200
                        },
                        {
                            x: 'Feb',
                            y: 530
                        },
                        {
                            x: 'Mar',
                            y: 110
                        },
                        {
                            x: 'Apr',
                            y: 130
                        },
                        {
                            x: 'May',
                            y: 480
                        },
                        {
                            x: 'Jun',
                            y: 520
                        },
                        {
                            x: 'Jul',
                            y: 780
                        },
                        {
                            x: 'Aug',
                            y: 435
                        },
                        {
                            x: 'Sep',
                            y: 475
                        },
                        {
                            x: 'Oct',
                            y: 738
                        },
                        {
                            x: 'Nov',
                            y: 454
                        },
                        {
                            x: 'Dec',
                            y: 480
                        }
                    ]
                }
            ],
            options: {
                chart: {
                    height: 350,
                    animations: {
                        speed: 500
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 8,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.1
                    },
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                colors: ["rgb(132, 90, 223)", "rgba(35, 183, 229, 0.85)", "rgba(119, 119, 142, 0.05)"],
                dataLabels: {
                    enabled: false
                },
                grid: {
                    borderColor: '#f1f1f1',
                    strokeDashArray: 3
                },
                stroke: {
                    curve: 'smooth',
                    width: [2, 2, 0],
                    dashArray: [0, 5, 0],
                },
                xaxis: {
                    axisTicks: {
                        show: false,
                    },
                },
                yaxis: {
                    labels: {
                        formatter: function (value) {
                            return "$" + value;
                        }
                    },
                },
                tooltip: {
                    y: [{
                        formatter: function (e) {
                            return void 0 !== e ? "$" + e.toFixed(0) : e;
                        }
                    }, {
                        formatter: function (e) {
                            return void 0 !== e ? "$" + e.toFixed(0) : e;
                        }
                    }, {
                        formatter: function (e) {
                            return void 0 !== e ? e.toFixed(0) : e;
                        }
                    }]
                },
                legend: {
                    show: true,
                    customLegendItems: ['Profit', 'Revenue', 'Sales'],
                    inverseOrder: true
                },
                title: {
                    text: 'Revenue Analytics with sales & profit (USD)',
                    align: 'left',
                    style: {
                        fontSize: '.8125rem',
                        fontWeight: 'semibold',
                        color: '#8c9097'
                    },
                },
                markers: {
                    hover: {
                        sizeOffset: 5
                    }
                }
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>

        );
    }
}

//target incomplete

export class Target extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [48],
            options: {
                chart: {
                    height: 127,
                    width: 100,
                    type: "radialBar",
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                colors: ["rgba(255,255,255,0.9)"],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: "55%",
                            background: "#fff"
                        },
                        dataLabels: {
                            name: {
                                offsetY: -10,
                                color: "#4b9bfa",
                                fontSize: ".625rem",
                                show: false
                            },
                            value: {
                                offsetY: 5,
                                color: "#4b9bfa",
                                fontSize: ".875rem",
                                show: true,
                                fontWeight: 600
                            }
                        }
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: ["Status"]
            }

        };
    }

    render() {
        return (

            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" width={100} height={127} />
            </div>
        );
    }
}

//Total Customers

export class Customers extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Value',
                data: [20, 14, 19, 10, 23, 20, 22, 9, 12]
            }],
            options: {
                colors: ["rgb(132, 90, 223)"],
                chart: {
                    type: 'line',
                    height: 40,
                    width: 100,
                    sparkline: {
                        enabled: true
                    },
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.9,
                        opacityTo: 0.9,
                        stops: [0, 98],
                    }
                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    // show: false,
                    axisBorder: {
                        show: false
                    },
                },
                tooltip: {
                    enabled: false,
                },
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={40} width={100} />
            </div>

        );
    }
}

//Total Revenue

export class Revenue extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [20, 14, 20, 22, 9, 12, 19, 10, 25]
            }],
            options: {
                colors: ["rgb(35, 183, 229)"],
                chart: {
                    type: 'line',
                    height: 40,
                    width: 100,
                    sparkline: {
                        enabled: true
                    },
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.9,
                        opacityTo: 0.9,
                        stops: [0, 98],
                    }
                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                },
                tooltip: {
                    enabled: false,
                },
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={40} width={100} />
            </div>

        );
    }
}

// Conversation Ratio

export class Ratio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [20, 20, 22, 9, 14, 19, 10, 25, 12]
            }],
            options: {
                colors: ["rgb(38, 191, 148)"],
                chart: {
                    type: 'line',
                    height: 40,
                    width: 100,
                    sparkline: {
                        enabled: true
                    },
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.9,
                        opacityTo: 0.9,
                        stops: [0, 98],
                    }
                },

                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                },
                tooltip: {
                    enabled: false,
                },
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={40} width={100} />
            </div>

        );
    }
}

//Total Details

export class Deals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [20, 20, 22, 9, 12, 14, 19, 10, 25]
            }],
            options: {
                colors: ["rgb(245, 184, 73)"],
                chart: {
                    type: 'line',
                    height: 40,
                    width: 100,
                    sparkline: {
                        enabled: true
                    },
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.9,
                        opacityTo: 0.9,
                        stops: [0, 98],
                    }
                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    // show: false,
                    axisBorder: {
                        show: false
                    },
                },
                tooltip: {
                    enabled: false,
                },
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={40} width={100} />
            </div>

        );
    }
}

//Profit Earned

export class Earned extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Profit Earned',
                data: [44, 42, 57, 86, 58, 55, 70],
            }, {
                name: 'Total Sales',
                data: [34, 22, 37, 56, 21, 35, 60],
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 180,
                    toolbar: {
                        show: false,
                    },
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                grid: {
                    borderColor: '#f1f1f1',
                    strokeDashArray: 3
                },
                colors: ["rgb(132, 90, 223)", "#e4e7ed"],
                plotOptions: {
                    bar: {
                        colors: {
                            ranges: [{
                                from: -100,
                                to: -46,
                                color: '#ebeff5'
                            }, {
                                from: -45,
                                to: 0,
                                color: '#ebeff5'
                            }]
                        },
                        columnWidth: '60%',
                        borderRadius: 5,
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: undefined,
                },
                legend: {
                    show: false,
                    position: 'top',
                },
                yaxis: {
                    title: {
                        style: {
                            color: '#adb5be',
                            fontSize: '13px',
                            fontFamily: 'poppins, sans-serif',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    },
                    labels: {
                        formatter: function (y) {
                            return y.toFixed(0) + "";
                        }
                    }
                },
                xaxis: {
                    categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                    axisBorder: {
                        show: true,
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0,
                    },
                    axisTicks: {
                        show: true,
                        borderType: 'solid',
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0
                    },
                    labels: {
                        rotate: -90
                    }
                }
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={180} />
            </div>

        );
    }
}

//Leads by Source

export class Sourcedata extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [32, 27, 25, 16],
            options: {

                // labels: ["My First Datset"],
                chart: {
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                    type: 'donut'
                },
                dataLabels: {
                    enabled: false,
                },

                legend: {
                    show: false,
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'round',
                    colors: ["#fff"],
                    width: 0,
                    dashArray: 0,
                },
                plotOptions: {

                    pie: {
                        expandOnClick: false,
                        donut: {
                            size: '82%',
                            labels: {
                                show: false,
                                name: {
                                    show: true,
                                    fontSize: '20px',
                                    color: '#495057',
                                    offsetY: -4
                                },
                                value: {
                                    show: true,
                                    fontSize: '18px',
                                    color: undefined,
                                    offsetY: 8,
                                    formatter: function (val) {
                                        return val + "%";
                                    }
                                },

                            }
                        }
                    }
                },
                colors: ["rgb(132, 90, 223)", "rgb(35, 183, 229)",  "rgb(245, 184, 73)", "rgb(38, 191, 148)",],
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={260} />
        );
    }
}

// Deals Statistics

export const Dealsstatistics = [
    { id: '1', src:"../../../assets/images/faces/4.jpg", name: 'Mayor Kelly', role: 'Manufacture', mail: 'mayorkelly@gmail.com', location: 'Germany', date: 'Sep 15 - Oct 12, 2023', color: 'info', checked: '' },
    { id: '2', src:"../../../assets/images/faces/15.jpg", name: 'Andrew Garfield', role: 'Development', mail: 'andrewgarfield@gmail.com', location: 'Canada', date: 'Apr 10 - Dec 12, 2023', color: 'primary', checked: 'defaultChecked' },
    { id: '3', src:"../../../assets/images/faces/11.jpg", name: 'Simon Cowel', role: 'Service', mail: 'simoncowel234@gmail.com', location: 'Europe', date: 'Sep 15 - Oct 12, 2023', color: 'danger', checked: '' },
    { id: '4', src:"../../../assets/images/faces/8.jpg", name: 'Mirinda Hers', role: 'Marketing', mail: 'mirindahers@gmail.com', location: 'USA', date: 'Apr 14 - Dec 14, 2023', color: 'warning', checked: 'defaultChecked' },
    { id: '5', src:"../../../assets/images/faces/9.jpg", name: 'Jacob Smith', role: 'Social Plataform', mail: 'jacobsmith@gmail.com', location: 'Singapore', date: 'Feb 25 - Nov 25, 2023', color: 'success', checked: 'defaultChecked' },
];