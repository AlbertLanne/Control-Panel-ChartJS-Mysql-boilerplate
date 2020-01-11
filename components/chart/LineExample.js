import { Line } from './BaseCharts'

// const tailwindConfig = require('../../tailwind.config') // Or wherever the file is
// import {bg-background-primary} from "../../assets/css/tailwind.css";
// console.log('var(--bg-background-primary)');

// import '../../assets/css/tailwind.css';

// document.documentElement.style.setProperty('--bg-background-primary', 'blue');
// getter
// document.documentElement.style.getPropertyValue('--bg-background-primary');



export default {

  extends: Line,

  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: "#1e1d1c",
          data: [40, 39, 10, 40, 39, 80, 40]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false, showTooltips: false})
  }
}
