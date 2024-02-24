import dynamic from "next/dynamic";
import { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export class Totalusers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [0, 21, 54, 38, 56, 24, 65]
            }],
            options: {
                chart: {
                    type: 'line',
                    height: 40,
                    width: 120,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
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
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },
                },
                stroke: {
                    show: true,
                    curve: 'straight',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {
                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisTicks: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    }
                },
                colors: ['#23b7e5'],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={40} width={120} />
            </div>

        );
    }
}

//Live Visitors

export class Bouncerate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48]
            }],
            options: {
                chart: {
                    type: 'line',
                    height: 45,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 1,
                        color: '#fff',
                        opacity: 0.05
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
                    width: 2,
                    dashArray: 0,
                },
                fill: {

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
                colors: ["rgba(132, 90, 223, 0.1)"],
                tooltip: {
                    enabled: false,
                }
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={45} />
            </div>

        );
    }
}

//Audience Report

export class AudienceReport extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: 'Views',
                    type: 'column',
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35]
                },
                {
                    name: 'Followers',
                    type: 'line',
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27]
                },
            ],
            options: {
                chart: {
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                    toolbar: {
                        show: false
                    },
                    type: 'line',
                    height: 250,
                },
                grid: {
                    borderColor: '#f1f1f1',
                    strokeDashArray: 3
                },
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [1, 1.1],
                    curve: ['straight', 'smooth'],
                },
                legend: {
                    show: true,
                    position: 'top',
                },
                xaxis: {
                    axisBorder: {
                        color: '#e9e9e9',
                    },
                },
                plotOptions: {
                    bar: {
                        columnWidth: "20%",
                        borderRadius: 2
                    }
                },
                colors: ["rgba(132, 90, 223, 1)", '#23b7e5'],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={257} />
            </div>

        );
    }
}

//Impressions

export class Impressions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [48],
            options: {
                
                chart: {
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                    height: 120,
                    width: 100,
                    type: "radialBar",
                },
                colors: ["#23b7e5"],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: "50%",
                            background: "#fff"
                        },
                        dataLabels: {
                            name: {
                                offsetY: -10,
                                color: "#4b9bfa",
                                fontSize: "10px",
                                show: false
                            },
                            value: {
                                offsetY: 5,
                                color: "#4b9bfa",
                                fontSize: "12px",
                                show: true,
                                fontWeight: 800
                            }
                        }
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: ["Followers"]
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" width={100} height={120} />
            </div>

        );
    }
}

//Clicks

export class Clicks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [65],
            options: {

                chart: {
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                    height: 120,
                    width: 100,
                    type: "radialBar",
                },
                colors: ["#f7b731"],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: "50%",
                            background: "#fff"
                        },
                        dataLabels: {
                            name: {
                                offsetY: -10,
                                color: "#4b9bfa",
                                fontSize: "10px",
                                show: false
                            },
                            value: {
                                offsetY: 5,
                                color: "#4b9bfa",
                                fontSize: "12px",
                                show: true,
                                fontWeight: 800
                            }
                        }
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: ["Views"]
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" width={100} height={120} />
            </div>

        );
    }
}

//Sessions By Device

export class Sessionbydevice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [1754, 1234, 878, 270],
            options: {

                labels: ["Mobile", "Tablet", "Desktop", "Others"],
                chart: {
                    height: 250,
                    type: 'donut',
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
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
                            size: '80%',
                            background: 'transparent',
                            labels: {
                                show: true,
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
                                total: {
                                    show: true,
                                    showAlways: true,
                                    label: 'Total',
                                    fontSize: '22px',
                                    fontWeight: 600,
                                    color: '#495057',
                                }

                            }
                        }
                    }
                },
                colors: ["rgba(132, 90, 223, 1)", "rgba(35, 183, 229, 1)", "rgba(38, 191, 148, 1)", "rgba(245, 184, 73, 1)",],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={250} />
            </div>

        );
    }
}

//Top Countries Sessions vs Bounce Rate

export class Countries extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: 'Session',
                    data: [24, 23, 20, 25, 27, 26, 24, 23, 23, 25, 23, 23],
                    type: 'line',
                },
                {
                    name: 'Bounce Rate',
                    data: [20, 23, 26, 22, 20, 26, 28, 26, 22, 27, 25, 26],
                    type: 'bar',
                },
            ],
            options: {
                chart: {
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                    height: 308,
                    zoom: {
                        enabled: false
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                grid: {
                    borderColor: '#f1f1f1',
                    strokeDashArray: 3
                },
                legend: {
                    show: true,
                    position: 'top',
                },
                plotOptions: {
                    bar: {
                        borderRadius: 5,
                        columnWidth: "40%",
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                    }
                },
                colors: ["rgb(132, 90, 223)", "#ededed"],
                stroke: {
                    curve: ['smooth', 'stepline'],
                    width: [2, 0],
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    axisBorder: {
                        color: '#e9e9e9',
                    },
                }
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={308} />
            </div>

        );
    }
}

//Sessions Duration By New Users

export class Sessionduration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'New Users',
                data: [32, 15, 63, 51, 36, 62, 99, 42, 78, 76, 32, 120],
            }, {
                name: 'Sessions',
                data: [56, 58, 38, 50, 64, 45, 55, 32, 15, 63, 51, 136]
            }, {
                name: 'Avg Session Duration',
                data: [48, 29, 50, 69, 20, 59, 52, 12, 48, 28, 17, 98]
            }],
            options: {

                chart: {
                    height: 385,
                    type: 'line',
                    toolbar: {
                        show: false,
                    },
                    background: 'none',
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                grid: {
                    borderColor: '#f2f6f7',
                },
                colors: ["rgb(132, 90, 223)", "#23b7e5", "#f5b849"],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight',
                    width: 3
                },
                legend: {
                    show: true,
                    position: 'top',
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    axisBorder: {
                        show: false,
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0,
                    },
                    axisTicks: {
                        show: false,
                        borderType: 'solid',
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0
                    },
                    labels: {
                        rotate: -90,
                    }
                },
                yaxis: {
                    show: false,
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    }
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={395} />
            </div>

        );
    }
}


export const Visitorsbychannel = [
    { id: 1, icon: 'search-2-line', name: 'Organic Search', session: '782', rate: '32.09%', avg: '	0 hrs : 0 mins : 32 secs', goal: '278', pages: '2.9', color: 'primary' },
    { id: 2, icon: 'globe-line ', name: 'Direct', session: '882', rate: '39.38%', avg: '0 hrs : 2 mins : 45 secs', goal: '782', pages: '1.5', color: 'secondary' },
    { id: 3, icon: 'share-forward-line', name: 'Referral', session: '322', rate: '22.67%', avg: '0 hrs : 38 mins : 28 secs', goal: '622', pages: '3.2', color: 'success' },
    { id: 4, icon: 'reactjs-line', name: 'Social', session: '389', rate: '25.11%', avg: '0 hrs : 12 mins : 89 secs', goal: '142', pages: '1.4', color: 'info' },
    { id: 5, icon: 'mail-line', name: 'Email', session: '378', rate: '23.79%', avg: '0 hrs : 14 mins : 27 secs', goal: '178', pages: '1.6', color: 'warning' },
    { id: 6, icon: 'bank-card-line', name: 'Paid Search', session: '488', rate: '28.77%', avg: '0 hrs : 16 mins : 28 secs', goal: '578', pages: '2.5', color: 'danger' }
];

//

// export const Visitorsbycountries = [
//     { id: 1, src: us, city: 'United States', badge: '32,190' },
//     { id: 2, src: germany, city: 'Germany', badge: '8,798' },
//     { id: 3, src: mexico, city: 'Mexico', badge: '16,885' },
//     { id: 4, src: uae, city: 'Uae', badge: '14,885' },
//     { id: 5, src: argentina, city: 'Argentina', badge: '17,578' },
//     { id: 6, src: russia, city: 'Russia', badge: '10,118' },
//     { id: 7, src: china, city: 'China', badge: '6,578' },
//     { id: 8, src: france, city: 'France', badge: '2,345' },
//     { id: 9, src: canada, city: 'Canada', badge: '1,678' }
// ];