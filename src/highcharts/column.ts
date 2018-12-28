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
    min: 0,
    max: 20,
    tickPositioner() {
      /**
       * 動的にtickPositionを更新したい場合は setPositioner を使う
       */
      return [
        this.min,
        Math.round((this.max - this.min) / 2 + this.min),
        this.max,
      ];
    },
    title: {
      text: '稼働時間',
    },
    labels: {
      format: '{value}分',
    },
    plotLines: [
      {
        id: 'from',
        color: 'blue',
        dashStyle: 'LongDash',
        value: 0,
        width: 2,
        zIndex: 5,
      },
      {
        id: 'to',
        color: 'red',
        dashStyle: 'LongDash',
        value: 20,
        width: 2,
        zIndex: 5,
      },
    ],
  },
  plotOptions: {
    series: {
      animation: false,
    },
  },
  series,
});

/**
 * y軸のmin,maxを更新する
 */
document.querySelector('#modifyColumnAxis').addEventListener('click', () => {
  const min = 5;
  const max = 15;
  const yAxis = chart.yAxis[0];
  yAxis.setExtremes(min, max);
  yAxis.removePlotLine('from');
  yAxis.removePlotLine('to');
  yAxis.addPlotLine({
    id: 'from',
    color: 'blue',
    dashStyle: 'LongDash',
    value: min,
    width: 2,
    zIndex: 5,
  });
  yAxis.addPlotLine({
    id: 'to',
    color: 'red',
    dashStyle: 'LongDash',
    value: max,
    width: 2,
    zIndex: 5,
  });
});
