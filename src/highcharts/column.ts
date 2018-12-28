import Highcharts from 'highcharts/highstock';

const data1: Highcharts.SeriesColumnDataOptions[] = [
  {
    x: Date.UTC(2018, 0, 1),
    y: 5,
  },
  {
    x: Date.UTC(2018, 0, 2),
    y: 10,
  },
  {
    x: Date.UTC(2018, 0, 3),
    y: 8,
  },
];

const data2: Highcharts.SeriesColumnDataOptions[] = [
  {
    x: Date.UTC(2018, 0, 1),
    y: 8,
  },
  {
    x: Date.UTC(2018, 0, 2),
    y: 15,
  },
  {
    x: Date.UTC(2018, 0, 3),
    y: 3,
  },
];

const series: Highcharts.SeriesColumnOptions[] = [
  {
    type: 'column',
    name: '1号機',
    data: data1,
  },
  {
    type: 'column',
    name: '2号機',
    data: data2,
  },
];

const chart = Highcharts.chart({
  chart: {
    renderTo: 'column',
    type: 'column',
  },
  title: {
    text: 'Column Chart',
  },
  xAxis: {
    type: 'datetime',
  },
  yAxis: {
    tickInterval: 5,
    min: 0,
    max: 20,
    title: {
      text: '稼働時間',
    },
    labels: {
      format: '{value}分',
    },
  },
  series,
});

document.querySelector('#modifyColumnAxis').addEventListener('click', () => {
  chart.yAxis[0].setExtremes(5, 15);
});
