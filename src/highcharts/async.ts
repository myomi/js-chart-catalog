import Highcharts, { chart } from 'highcharts/highstock';

/*
 * https://www.highcharts.com/docs/working-with-data/custom-preprocessing
 */

const data1: Highcharts.SeriesLineDataOptions[] = [
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

const data2: Highcharts.SeriesLineDataOptions[] = [
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

const series: Highcharts.SeriesLineOptions[] = [];

const options: Highcharts.Options = {
  chart: {
    type: 'line',
  },
  title: {
    text: 'Loaded asynchronously',
  },
  xAxis: {
    type: 'datetime',
  },
  yAxis: {
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
};

setTimeout(() => {
  series.push({
    type: 'line',
    name: '1号機',
    data: data1,
  });
  series.push({
    type: 'line',
    name: '2号機',
    data: data2,
  });
  Highcharts.chart('async', options);
}, 1000);
