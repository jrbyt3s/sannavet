import dynamic from "next/dynamic";
import { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

//Your Balance

export class Totalbalance extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [20, 14, 19, 10, 25, 20, 22, 9, 12]
            }],
            options: {

                chart: {
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                    type: 'line',
                    height: 40,
                    sparkline: {
                        enabled: true
                    }
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 2.5,
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
                colors: ["rgb(132, 90, 223)"],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={40} />
            </div>

        );
    }
}

//NFTs Statistics

export class NFTStatistics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: "Price",
                data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80]
            }, {
                name: "Volume",
                data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
            }],
            options: {
                chart: {
                    height: 343,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
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
                    width:  [3, 3],
                    dashArray: [0, 4],
                },
                grid: {
                    borderColor: '#f2f6f7',
                },
                colors: ["rgb(132, 90, 223)", "rgba(132, 90, 223, 0.3)"],
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
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={343} />
            </div>

        );
    }
}

//Trending Auctions

export const Trendingauctions = [
    { id: 1, likes: '1.32k', src1:"../../../assets/images/nft-images/2.png", src2:"../../../assets/images/faces/10.jpg", name: 'Bloom NFT', mail: '@bloom116', color: 'Color Abstrac', bid: '0.19ETH' },
    { id: 2, likes: '1.26k', src1:"../../../assets/images/nft-images/3.png", src2:"../../../assets/images/faces/5.jpg", name: 'Ergos NFT', mail: '@ergos900', color: 'Fluid Abstract', bid: '0.35ETH' },
    { id: 3, likes: '2.45k', src1:"../../../assets/images/nft-images/5.png", src2:"../../../assets/images/faces/7.jpg", name: 'Caros NFT', mail: '@caros002', color: 'Space Fluid', bid: '0.13ETH' },
    { id: 4, likes: '1.57k', src1:"../../../assets/images/nft-images/4.png", src2:"../../../assets/images/faces/11.jpg", name: 'Daron NFT', mail: '@daron789', color: 'Fluid Abstract', bid: '0.75ETH' },
];

// Top Collectors

export const TopCollectors = [
    { id: 1, src:"../../../assets/images/faces/5.jpg", name: 'Alicia Smith', progress:"w-[75%]", text1: '$9,223.46', text2: '0.214ETH', value: '75%', class:"" },
    { id: 2, src:"../../../assets/images/faces/15.jpg", name: 'Alex Carey', progress:"w-[60%]", text1: '$17,239.09', text2: '1.890ETH', value: '60%', class:"" },
    { id: 3, src:"../../../assets/images/faces/4.jpg", name: 'Emiley Jack', progress:"w-[35%]", text1: '$5,902.83', text2: '1.903ETH', value: '35%', class:"" },
    { id: 4, src:"../../../assets/images/faces/3.jpg", name: 'Jessica', progress:"w-[70%]", text1: '$12,124.34', text2: '0.689ETH', value: '70%', class:"" },
    { id: 5, src:"../../../assets/images/faces/11.jpg", name: 'Json Taylor', progress:"w-[90%]", text1: '$12,124.34', text2: '2.577ETH', value: '90%', class:"" },
    { id: 6, src:"../../../assets/images/faces/2.jpg", name: 'Kiara May', progress:"w-[62%]", text1: '$2,534.56', text2: '0.737ETH', value: '62%', class:"" },
    { id: 7, src:"../../../assets/images/faces/14.jpg", name: 'Agire Khan', progress:"w-[85%]", text1: '$15,236.00', text2: '6.345ETH', value: '85%', class:"border-b-0"}
];

//   Trending NFTs



export const TrendingNFTs = [
    { id: 1, src: "../../../assets/images/nft-images/1.png", name: 'Starter Sense NFT', mail: '@irukasensei229', rank: '#1', volume: '2.56ETH', value1: '15.2%', value2: '3.1%', price: '2.31ETH', items: '12.4K', color1: 'text-success', color2: 'text-success', class1: 'up', class2: 'up', },
    { id: 2, src:"../../../assets/images/nft-images/2.png", name: 'Lorem Kekkei', mail: '@clansound209', rank: '#2', volume: '1.25ETH', value1: '3.7%', value2: '0.5%', price: '0.25ETH', items: '10.1K', color1: 'text-success', color2: 'text-danger', class1: 'up', class2: 'down' },
    { id: 3, src:"../../../assets/images/nft-images/10.png", name: 'NFT Uchiha', mail: '@sasukeuhi990', rank: '#3', volume: '2,092ETH', value1: '23.1%', value2: '9.12%', price: '2,000ETH', items: '52.7K', color1: 'text-danger', color2: 'text-success', class1: 'down', class2: 'up', },
    { id: 4, src:"../../../assets/images/nft-images/12.png", name: 'Lorem Ipsum Uch', mail: '@kakashi092', rank: '#4', volume: '36.25ETH', value1: '5.2%', value2: '4.1%', price: '30.12ETH', items: '31.4K', color1: 'text-danger', color2: 'text-danger', class1: 'down', class2: 'down '},
    { id: 5, src:"../../../assets/images/nft-images/15.png", name: 'Ivan Shomer Har', mail: '@narutouze025', rank: '#5', volume: '12.52ETH', value1: '7.0%', value2: '12.5% ', price: '12.50ETH', items: '121.5K', color1: 'text-success', color2: 'text-success', class1: 'up', class2: 'up', },
];

//Personal Listings
const data = <i className="ri-arrow-up-s-line align-middle me-1"></i>
const data1 = <i className="ri-arrow-down-s-line align-middle me-1"></i>

export const TrendingNFTs1 = [
    { id: 1, src:"../../../assets/images/nft-images/10.png", name: 'Kakasha Si', mail: '@sensei011', value: '0.45%', color: 'success', price: '1.75ETH', icon:data , class:""},
    { id: 2, src:"../../../assets/images/nft-images/1.png", name: 'Oorichimaru lo', mail: '@ooro001', value: '0.24%', color: 'success', price: '1.15ETH', icon:data , class:""},
    { id: 3, src:"../../../assets/images/nft-images/12.png", name: 'SakuraYM', mail: '@sakura903', value: '0.07%', color: 'danger', price: '1.58ETH', icon:data1 , class:""},
    { id: 4, src:"../../../assets/images/nft-images/4.png", name: 'Sasuke Uchiha', mail: '@sasuke777', value: '1.34%', color: 'success', price: '1.19ETH', icon:data, class:""},
    { id: 5, src:"../../../assets/images/nft-images/15.png", name: 'Naruto Uzumaki', mail: '@naruto111', value: '1.70%', color: 'success', price: '2.45ETH', icon:data, class:""},
    { id: 6, src:"../../../assets/images/nft-images/16.png", name: 'Kazimo Aruke', mail: '@kazimo900', value: '1.21%', color: 'danger', price: '1.95ETH', icon:data1, class:""},
    { id: 7, src:"../../../assets/images/nft-images/6.png", name: 'Nagiro Ohinavo', mail: '@nagiro096', value: '0.99%', color: 'success', price: '1.12ETH', icon:data, class:"rounded-b-md"},
];