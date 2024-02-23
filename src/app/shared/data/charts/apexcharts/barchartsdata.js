import dynamic from 'next/dynamic';
import { Component } from 'react';
const ReactApexChart = dynamic(() => import("react-apexcharts"), {ssr : false});

//Basic Bar Chart

export class Basicbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 320,
                    events: {
                        mounted: (chart) => {
                            chart.windowResizeHandler();
                        }
                    },

                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }
                },
                colors: ["#845adf"],
                grid: {
                    borderColor: '#f2f5f7',
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                        'United States', 'China', 'Germany'
                    ],
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

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={320} />

        );
    }
}

//Grouped Bar Chart

export class Grouped extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                data: [44, 55, 41, 64, 22, 43, 21]
            }, {
                data: [53, 32, 33, 52, 13, 44, 32]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 320,
                    events: {
                        mounted: (chart) => {
                            chart.windowResizeHandler();
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            position: 'top',
                        },
                    }
                },
                grid: {
                    borderColor: '#f2f5f7',
                },
                colors: ["#845adf", "#23b7e5"],
                dataLabels: {
                    enabled: true,
                    offsetX: -6,
                    style: {
                        fontSize: '10px',
                        colors: ['#fff']
                    }
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ['#fff']
                },
                tooltip: {
                    shared: true,
                    intersect: false
                },
                xaxis: {
                    categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
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

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={320} />

        );
    }
}

//Stacked Bar Chart

export class Stackedbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Marine Sprite',
                data: [44, 55, 41, 37, 22, 43, 21]
            }, {
                name: 'Striking Calf',
                data: [53, 32, 33, 52, 13, 43, 32]
            }, {
                name: 'Tank Picture',
                data: [12, 17, 11, 9, 15, 11, 20]
            }, {
                name: 'Bucket Slope',
                data: [9, 7, 5, 8, 6, 9, 4]
            }, {
                name: 'Reborn Kid',
                data: [25, 12, 19, 32, 25, 24, 10]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 320,
                    stacked: true,
                    events: {
                        mounted: (chart) => {
                            chart.windowResizeHandler();
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                colors: ["#845adf", "#23b7e5", "#f5b849", "#e6533c", "#49b6f5"],
                grid: {
                    borderColor: '#f2f5f7',
                },
                title: {
                    text: 'Fiction Books Sales',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                xaxis: {
                    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                    labels: {
                        formatter: function (val) {
                            return val + "K";
                        },
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
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
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + "K";
                        }
                    }
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={320} />

        );
    }
}

//100% Stacked Bar Chart

export class Stacked100bar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Marine Sprite',
                data: [44, 55, 41, 37, 22, 43, 21]
            }, {
                name: 'Striking Calf',
                data: [53, 32, 33, 52, 13, 43, 32]
            }, {
                name: 'Tank Picture',
                data: [12, 17, 11, 9, 15, 11, 20]
            }, {
                name: 'Bucket Slope',
                data: [9, 7, 5, 8, 6, 9, 4]
            }, {
                name: 'Reborn Kid',
                data: [25, 12, 19, 32, 25, 24, 10]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 320,
                    stacked: true,
                    stackType: '100%',
                    events: {
                        mounted: (chart) => {
                            chart.windowResizeHandler();
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                colors: ["#845adf", "#23b7e5", "#f5b849", "#e6533c", "#49b6f5"],
                grid: {
                    borderColor: '#f2f5f7',
                },
                title: {
                    text: '100% Stacked Bar',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                xaxis: {
                    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
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
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + "K";
                        }
                    }
                },
                fill: {
                    opacity: 1

                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={320} />

        );
    }
}

//Bar Chart With Negative Values

export class Negativebar extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Males',
                data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
                    3.9, 3.5, 3
                ]
            },
            {
                name: 'Females',
                data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
                -4.1, -4, -4.1, -3.4, -3.1, -2.8
                ]
            }
            ],
            options: {
                chart: {
                    type: 'bar',
                    height: 440,
                    stacked: true,
                    events: {
                        mounted: (chart) => {
                            chart.windowResizeHandler();
                        }
                    },
                },
                colors: ["#845adf", "#23b7e5"],
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '80%',
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 1,
                    colors: ["#fff"]
                },

                grid: {
                    xaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                yaxis: {
                    min: -5,
                    max: 5,
                    title: {
                    },
                },
                tooltip: {
                    shared: false,
                    x: {
                        formatter: (val) => val.toString(),
                    },
                    y: {
                        formatter: (val) => Math.abs(val) + '%',
                    }
                },
                title: {
                    text: 'Mauritius population pyramid 2011'
                },
                xaxis: {
                    categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
                        '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
                        '0-4'
                    ],
                    title: {
                        text: 'Percent'
                    },
                    labels: {
                        formatter: (val) => Math.abs(Math.round(val)) + '%',
                    }
                },
            },

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />

        );
    }
}

//Bar Chart With Markers

export class Markerbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: 'Actual',
                    data: [
                        {
                            x: '2011',
                            y: 12,
                            goals: [
                                {
                                    name: 'Expected',
                                    value: 14,
                                    strokeWidth: 2,
                                    strokeDashArray: 2,
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: '2012',
                            y: 44,
                            goals: [
                                {
                                    name: 'Expected',
                                    value: 54,
                                    strokeWidth: 5,
                                    strokeHeight: 10,
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: '2013',
                            y: 54,
                            goals: [
                                {
                                    name: 'Expected',
                                    value: 52,
                                    strokeWidth: 10,
                                    strokeHeight: 0,
                                    strokeLineCap: 'round',
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: '2014',
                            y: 66,
                            goals: [
                                {
                                    name: 'Expected',
                                    value: 61,
                                    strokeWidth: 10,
                                    strokeHeight: 0,
                                    strokeLineCap: 'round',
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: '2015',
                            y: 81,
                            goals: [
                                {
                                    name: 'Expected',
                                    value: 66,
                                    strokeWidth: 10,
                                    strokeHeight: 0,
                                    strokeLineCap: 'round',
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: '2016',
                            y: 67,
                            goals: [
                                {
                                    name: 'Expected',
                                    value: 70,
                                    strokeWidth: 5,
                                    strokeHeight: 10,
                                    strokeColor: '#775DD0'
                                }
                            ]
                        }
                    ]
                }
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                    events: {
                        mounted: (chart) => {
                            chart.windowResizeHandler();
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                grid: {
                    borderColor: '#f2f5f7',
                },
                colors: ['#23b7e5'],
                dataLabels: {
                    formatter: function (val, opt) {
                        const goals =
                            opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                                .goals;

                        if (goals && goals.length) {
                            return `${val} / ${goals[0].value}`;
                        }
                        return val;
                    },
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    customLegendItems: ['Actual', 'Expected'],
                    markers: {
                        fillColors: ['#00E396', '#775DD0']
                    }
                },
                xaxis: {
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

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />

        );
    }
}

//Reversed Bar Chart

export class Reversedbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                data: [400, 430, 448, 470, 540, 580, 690]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 320,
                    events: {
                        mounted: (chart) => {
                            chart.windowResizeHandler();
                        }
                    },
                },
                annotations: {
                    xaxis: [{
                        x: 500,
                        borderColor: '#00E396',
                        label: {
                            borderColor: '#00E396',
                            style: {
                                color: '#fff',
                                background: '#00E396',
                            },
                            text: 'X annotation',
                        }
                    }],
                    yaxis: [{
                        y: 'July',
                        y2: 'September',
                        label: {
                            text: 'Y annotation'
                        }
                    }]
                },
                grid: {
                    borderColor: '#f2f5f7',
                    xaxis: {
                        lines: {
                            show: true
                        }
                    }
                },
                colors: ["#845adf"],
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: true
                },
                xaxis: {
                    categories: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
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
                    labels: {
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    },
                    reversed: true,
                    axisTicks: {
                        show: true
                    }
                }
            }
        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />

        );
    }
}

//Bar With Categogry DataLabels

export class Categorybar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 320,
                    events: {
                        mounted: (chart) => {
                            chart.windowResizeHandler();
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        barHeight: '100%',
                        distributed: true,
                        horizontal: true,
                        dataLabels: {
                            position: 'bottom'
                        },
                    }
                },
                colors: ["#845adf", "#23b7e5", "#f5b849", "#e6533c", "#49b6f5", "#a65e76", "#5b67c7", "#a65e9a",
                    "#26bf94", "#23b7e5"
                ],
                grid: {
                    borderColor: '#f2f5f7',
                },
                dataLabels: {
                    enabled: true,
                    textAnchor: 'start',
                    style: {
                        colors: ['#fff']
                    },
                    formatter: function (val, opt) {
                        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
                    },
                    offsetX: 0,
                    dropShadow: {
                        enabled: false
                    }
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                xaxis: {
                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                        'United States', 'China', 'India'
                    ],
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
                    labels: {
                        show: false
                    }
                },
                title: {
                    text: 'Custom DataLabels',
                    align: 'center',
                    floating: true,
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                subtitle: {
                    text: 'Category Names as DataLabels inside bars',
                    align: 'center',
                },
                tooltip: {
                    theme: 'dark',
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function () {
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
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />

        );
    }
}

//Patterned Bar Chart

export class Patternbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Marine Sprite',
                data: [44, 55, 41, 37, 22, 43, 21]
            }, {
                name: 'Striking Calf',
                data: [53, 32, 33, 52, 13, 43, 32]
            }, {
                name: 'Tank Picture',
                data: [12, 17, 11, 9, 15, 11, 20]
            }, {
                name: 'Bucket Slope',
                data: [9, 7, 5, 8, 6, 9, 4]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,
                    dropShadow: {
                        enabled: true,
                        blur: 1,
                        opacity: 0.25
                    },
                    events: {
                        mounted: (chart) => {
                            chart.windowResizeHandler();
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '60%',
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 2,
                },
                colors: ["#845adf", "#23b7e5", "#f5b849", "#49b6f5"],
                title: {
                    text: 'Compare Sales Strategy',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                xaxis: {
                    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
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
                    title: {
                        text: undefined
                    },
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
                tooltip: {
                    shared: false,
                    y: {
                        formatter: function (val) {
                            return val + "K";
                        }
                    }
                },
                fill: {
                    type: 'pattern',
                    opacity: 1,
                    pattern: {
                        style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'], // string or array of strings

                    }
                },
                states: {
                    hover: {
                        // filter: 'none'
                    }
                },
                legend: {
                    position: 'right',
                    offsetY: 40
                }
            }
        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />

        );
    }
}

//Bar With Image Fill

export class Imagebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'coins',
                data: [2, 4, 3, 4, 3, 5, 5, 6.5, 6, 5, 4, 5, 8, 7, 7, 8, 8, 10, 9, 9, 12, 12,
                    11, 12, 13, 14, 16, 14, 15, 17, 19, 21
                ]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                    animations: {
                        enabled: false
                    },
                    events: {
                        mounted: (chart) => {
                            chart.windowResizeHandler();
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '100%',
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    colors: ["#fff"],
                    width: 0.2
                },
                labels: Array.from({ length: 39 }, (_, index) => (index + 1).toString()),
                xaxis: {
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
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    title: {
                        text: 'Weight',
                        style: {
                            color: "#8c9097",
                        }
                    },
                },
                grid: {
                    position: 'back'
                },
                title: {
                    text: 'Paths filled by clipped image',
                    align: 'right',
                    offsetY: 30,
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                fill: {
                    type: 'image',
                    opacity: 0.87,
                    image: {
                        src: ["../../../../assets/images/media/media-64.jpg"],
                        width: 466,
                        height: 406
                    }
                },
            }
        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />

        );
    }
}
