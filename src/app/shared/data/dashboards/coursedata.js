import dynamic from "next/dynamic";
import { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

//Earnings Report

export class Earningsreport extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: "Earnings",
                data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
            }, {
                name: "Students",
                data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38]
            }],
            options: {
                chart: {
                    height: 340,
                    type: "bar",
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [1.1, 1.1],
                    show: true,
                    curve: ['smooth', 'smooth'],
                },
                grid: {
                    borderColor: '#f3f3f3',
                    strokeDashArray: 3
                },
                xaxis: {
                    axisBorder: {
                        color: 'rgba(119, 119, 142, 0.05)',
                    },
                },
                legend: {
                    show: false
                },
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                markers: {
                    size: 0
                },
                colors: ["rgb(132, 90, 223)", "#e9e9e9"],
                plotOptions: {
                    bar: {
                        columnWidth: "50%",
                        borderRadius: 2,
                    }
                },
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={340} />
            </div>

        );
    }
}

//Payouts

export class Payouts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Paid',
                data: [55, 55, 42, 42, 55, 55, 38, 38, 53, 53, 35, 35],
                type: 'line',
            }, {
                name: 'UnPaid',
                data: [35, 35, 46, 46, 35, 35, 48, 48, 33, 33, 38, 38],
                type: "line",
            }],
            options: {
                chart: {
                    height: 270,
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
                colors: ["rgb(132, 90, 223)", "rgba(230, 83, 60,0.5)"],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                    dashArray: [0, 5],
                },
                legend: {
                    show: true,
                    position: 'top',
                },
                xaxis: {
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
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={270} />
            </div>

        );
    }
}

//Course list

export const Courselist = [
    { id: 1, src:"../../../assets/images/nft-images/1.png", name: 'Ray Optics & Optical Fibre Master Class', category: 'Science', classes: '20', last: '29-05-2023', instructor: 'Shin Opran', students: '25' },
    { id: 2, src:"../../../assets/images/nft-images/2.png", name: 'Master Linear Alzebra Medium Level', category: 'Mathematics', classes: '90', last: '11-06-2023', instructor: '	Arya Neo', students: '773' },
    { id: 3, src:"../../../assets/images/nft-images/8.png", name: 'Learn How To Trade And Invest For-Absolute Beginners', category: 'Stocks & Trading', classes: '161', last: '10-06-2023', instructor: 'Sia Niu', students: '51' },
    { id: 4, src:"../../../assets/images/nft-images/7.png", name: 'Digital Marketing Course from Scratch', category: 'Marketing', classes: '115', last: '21-06-2023', instructor: 'Stuart George', students: '1,189' },
    { id: 5, src:"../../../assets/images/nft-images/5.png", name: 'Data Structures & Algorithms For Beginners', category: 'Programming', classes: '30', last: '15-06-2023', instructor: 'Boran Ray', students: '3,368' },
    { id: 6, src:"../../../assets/images/nft-images/6.png", name: 'Css Zero to Hero Master Class', category: 'UI/UX', classes: '51', last: '22-06-2023', instructor: 'Burak Oin', students: '252' },
];