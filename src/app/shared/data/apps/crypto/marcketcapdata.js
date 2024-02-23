import dynamic from 'next/dynamic';
import { Component } from 'react';
const ReactApexChart = dynamic(() => import("react-apexcharts"), {ssr : false});


export class CapBitcoin extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        series: [
          {
            name: "Value",
            data: [
              0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
              61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
              35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24,
              65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19,
              46,
            ],
          },
        ],
        options: {
          chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
              enabled: true,
            },
            events: {
              mounted: (chart) => {
                chart.windowResizeHandler();
              }
            },
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 0,
              left: 0,
              blur: 3,
              color: "#000",
              opacity: 0.1,
            },
          },
          stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            dashArray: 0,
          },
          fill: {
            gradient: {
              //   enabled: false,
            },
          },
          yaxis: {
            min: 0,
            show: false,
            axisBorder: {
              show: false,
            },
          },
          xaxis: {
            axisBorder: {
              show: false,
            },
          },
          tooltip: {
            enabled: false,
          },
          colors: ["rgb(230, 83, 60)"],
        }
  
      };
    }
  
    render() {
      return (
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={35} width={120} />
  
      );
    }
  }
  
  export class CapEtherium extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        series: [
          {
            name: "Value",
            data: [
              0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
              61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
              35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
              61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
              46,
            ],
          },
        ],
        options: {
          chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
              enabled: true,
            },
            events: {
              mounted: (chart) => {
                chart.windowResizeHandler();
              }
            },
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 0,
              left: 0,
              blur: 3,
              color: "#000",
              opacity: 0.1,
            },
          },
          stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            dashArray: 0,
          },
          fill: {
            gradient: {
              //   enabled: false,
            },
          },
          yaxis: {
            min: 0,
            show: false,
            axisBorder: {
              show: false,
            },
          },
          xaxis: {
            axisBorder: {
              show: false,
            },
          },
          tooltip: {
            enabled: false,
          },
          colors: ["rgb(38, 191, 148)"],
        }
  
      };
    }
  
    render() {
      return (
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={35} width={120} />
  
      );
    }
  }
  
  export class CapBTC extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        series: [{
          name: 'Value',
          data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
        }],
        options: {
          chart: {
            type: 'line',
            height: 40,
            width: 120,
            sparkline: {
              enabled: true
            },
            events: {
              mounted: (chart) => {
                chart.windowResizeHandler();
              }
            },
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 0,
              left: 0,
              blur: 3,
              color: '#000',
              opacity: 0.1
            }
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
            gradient: {
              //   enabled: false
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
          colors: ['#26bf94'],
        }
  
      };
    }
  
    render() {
      return (
        // <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={35} width={120} />
        // </div>
  
      );
    }
  }
  
  //ETH
  export class CapETH extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        series: [{
          name: 'Value',
          data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
        }],
        options: {
          chart: {
            type: 'line',
            height: 40,
            width: 120,
            sparkline: {
              enabled: true
            },
            events: {
              mounted: (chart) => {
                chart.windowResizeHandler();
              }
            },
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 0,
              left: 0,
              blur: 3,
              color: '#000',
              opacity: 0.1
            }
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
            gradient: {
              //   enabled: false
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
          colors: ['#26bf94'],
        }
  
      };
    }
  
    render() {
      return (
        // <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={35} width={120} />
        // </div>
  
      );
    }
  }
  //DASH
  export class CapDASH extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        series: [{
          name: 'Value',
          data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
        }],
        options: {
          chart: {
            type: 'line',
            height: 40,
            width: 120,
            sparkline: {
              enabled: true
            },
            events: {
              mounted: (chart) => {
                chart.windowResizeHandler();
              }
            },
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 0,
              left: 0,
              blur: 3,
              color: '#000',
              opacity: 0.1
            }
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
            gradient: {
              //   enabled: false
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
          colors: ['#e6533c'],
        }
  
      };
    }
  
    render() {
      return (
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={35} width={120} />
  
      );
    }
  }