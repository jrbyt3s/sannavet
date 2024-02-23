import dynamic from "next/dynamic";
import { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export class Earning extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
  
        series: [{
          name: 'Total Orders',
          data: [44, 42, 57, 86, 112, 55, 70, 43, 23, 54, 77, 34],
        }],
        options: {
          chart: {
            events: {
              mounted: (chart) => {
                chart.windowResizeHandler();
              }
            },
            type: 'bar',
            height: 200
          },
          grid: {
            borderColor: '#f2f6f7',
          },
          colors: ["rgba(132, 90, 223, 0.3)", "rgba(132, 90, 223, 0.3)", "rgba(132, 90, 223, 0.3)", "rgba(132, 90, 223, 0.3)", "rgb(132, 90, 223)", "rgba(132, 90, 223, 0.3)", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed"],
          plotOptions: {
            bar: {
              columnWidth: '25%',
              distributed: true,
              borderRadius: 7,
            }
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          yaxis: {
            title: {
              style: {
                color: '#adb5be',
                fontSize: '12px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 500,
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
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
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
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={200} />
        </div>
  
      );
    }
  }

  //Recent Orders

  export const Recentorders = [
    { id: 1, src:"../../../assets/images/ecommerce/jpg/1.jpg", product: 'Smart Phone', price: '199.99', text: 'Mobiles', class: 'mb-3' },
    { id: 2, src:"../../../assets/images/ecommerce/jpg/2.jpg", product: 'White Headphones', price: '79.49', text: 'Music', class: 'mb-3' },
    { id: 3, src:"../../../assets/images/ecommerce/jpg/3.jpg", product: 'Stop Watch', price: '49.29', text: 'Electronics', class: 'mb-3' },
    { id: 4, src:"../../../assets/images/ecommerce/jpg/4.jpg", product: 'Kikon Camera', price: '1,699.00', text: 'Electronics', class: 'mb-3' },
    { id: 5, src:"../../../assets/images/ecommerce/jpg/5.jpg", product: 'Photo Frame', price: '29.99', text: 'Furniture', class: 'mb-3' },
    { id: 6, src:"../../../assets/images/ecommerce/jpg/6.jpg", product: 'Canvas Shoes', price: '89.99', text: 'Footwear', class: 'mb-0' },
  ];

  //Top Countries By Sales

  export const Countries = [
    { id: 1, src:"../../../assets/images/flags/french_flag.jpg", text: 'France', class1: 'up', class2: 'mb-3', color: 'success', price: '5,932' },
    { id: 2, src:"../../../assets/images/flags/spain_flag.jpg", text: 'spain', class1: 'down', class2: 'mb-3', color: 'danger', price: '5,383' },
    { id: 3, src:"../../../assets/images/flags/argentina_flag.jpg", text: 'Argentina', class1: 'up', class2: 'mb-3', color: 'success', price: '4,825' },
    { id: 4, src:"../../../assets/images/flags/uae_flag.jpg", text: 'Uae', class1: 'up', class2: 'mb-3', color: 'success', price: '4,527' },
    { id: 5, src:"../../../assets/images/flags/germany_flag.jpg", text: 'Germany', class1: 'down', class2: 'mb-0', color: 'danger', price: '4,501' }
  ];

  //

  export const ProductsOverview = [
    { id: 1, name: 'Niker College Bag', src:"../../../assets/images/ecommerce/png/36.png", productid: '#1734-9743', price: '$199.99', status: 'Available', sales: '3,903', text: '$67,899.24', color: 'success' },
    { id: 2, name: 'Dslr Camera (50mm f/1.9 HRM Lens)', src:"../../../assets/images/ecommerce/png/37.png", productid: '#1234-4567', price: '$1,299.99', status: 'Available', sales: '12,435', text: '$3,24,781.92', color: 'success' },
    { id: 3, name: 'Outdoor Bomber Jacket', src:"../../../assets/images/ecommerce/png/38.png", productid: '#1902-9883', price: '$99.99', status: 'Not Available', sales: '5,143', text: '$76,102.76', color: 'danger' },
    { id: 4, name: 'Light Blue Teddy', src:"../../../assets/images/ecommerce/png/39.png", productid: '#8745-1232', price: '$79.00', status: 'Limited Deal', sales: '7,183', text: '$78,211.83', color: 'warning' },
    { id: 5, name: 'Orange Smart Watch (24mm)', src:"../../../assets/images/ecommerce/png/40.png", productid: '#1962-9033', price: '$199.99', status: 'In Offer', sales: '10,287', text: '$2,32,982.99', color: 'primary' },
  ];