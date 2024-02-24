import dynamic from 'next/dynamic';
import { Component } from 'react';
const ReactApexChart = dynamic(() => import("react-apexcharts"), {ssr : false});

export class SellStatistics extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "Buy",
                data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
            }, {
                name: "Sell",
                data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
            }],

            options: {
                chart: {
                    height: 300,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 5,
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
                dataLabels: {
                    enabled: false
                },
                legend: {
                    position: "top",
                    horizontalAlign: "center",
                    offsetX: -15,
                    fontWeight: "bold",
                },
                stroke: {
                    curve: 'smooth',
                    dashArray: [0, 5],
                },
                grid: {
                    borderColor: '#f2f6f7',
                },
                colors: ["rgb(38, 191, 148)", "rgba(230, 83, 60, 0.3)"],
                yaxis: {
                    title: {
                        text: 'Statistics',
                        style: {
                            color: '#adb5be',
                            fontSize: '14px',
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
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
                        // width: 6,
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
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={300} />

        );
    }
}

/** Selectdata**/
export const Data1 = [
    { value: 'BTC', label: 'BTC' },
    { value: 'ETH', label: 'ETH' },
    { value: 'XRP', label: 'XRP' },
    { value: 'DASH', label: 'DASH' },
    { value: 'NEO', label: 'NEO' },
    { value: 'LTC', label: 'LTC' },
    { value: 'BSD', label: 'BSD' }
];
export const Data2 = [
    { value: 'USD', label: 'USD' },
    { value: 'AED', label: 'AED' },
    { value: 'AUD', label: 'AUD' },
    { value: 'ARS', label: 'ARS' },
    { value: 'AZN', label: 'AZN' },
    { value: 'BGN', label: 'BGN' },
    { value: 'BRL', label: 'BRL' }
];
