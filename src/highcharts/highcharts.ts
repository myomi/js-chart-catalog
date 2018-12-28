import Highcharts from 'highcharts/highstock';
import theme from 'highcharts/themes/avocado';
import heatmap from 'highcharts/modules/heatmap';

theme(Highcharts); // setup theme
// heatmap(Highcharts); // setup heatmap

import './column';

/**
 * https://www.highcharts.com/docs/getting-started/your-first-chart
 * Your First Chart
 */
const chart = Highcharts.chart({
  chart: {
    renderTo: document.querySelector('#container') as HTMLElement,
    type: 'bar',
  },
  title: {
    text: 'Fruit Consumption',
  },
  subtitle: {
    text: 'フルーツ消費量',
  },
  xAxis: {
    type: 'category',
    title: {
      text: 'フルーツ',
    },
    categories: ['Apples', 'Bananas', 'Oranges'],
  },
  yAxis: {
    type: 'linear',
    title: {
      text: '消費量',
    },
    tickInterval: 1,
    labels: {
      formatter() {
        return this.value + '個';
      },
    },
  },
  series: [
    {
      name: 'Jane',
      data: [1, 0, 4],
    },
    {
      name: 'John',
      data: [5, 7, 3],
    },
  ] as Highcharts.SeriesBarOptions[],
});
