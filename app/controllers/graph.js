function graph_datetime_formatter(format) {
  try {
    var value = this.value;
    var format = format || 'HH:mm';
    return moment(value).format(format);
  }
  catch (e) {
    return this.value;
  }
}

var GraphConfig = Ember.Object.create({
  chart: null,
  renderToId: null,
  chartType: null,
  series: null,
  categories: null,


  initialize: function () {
    var chart, title, xAxis;
    chart = {
      renderTo: this.get('renderToId'),
      type: this.get('chartType')
    };
    xAxis = {
      type: 'datetime',
      categories: this.get('categories'),
      gridLineWidth: 0,
      tickLength: 10,
      tickInterval: 10,
//      dateTimeLabelFormats: '%H:%M'
      labels: {
        enabled: true,
        formatter: graph_datetime_formatter
      }
    };
    title = {
      text: this.get('title')
    };
    this.set('chart', chart);
    this.set('xAxis', xAxis);
    return this.set('title', title);
  },
  credits: {
    enabled: false
  },
  colors: ["#2f69bf", "#a2bf2f", "#bf5a2f", "#bfa22f", "#772fbf", "#bf2f2f", "#00337f", "#657f00", "#7f2600", "#7f6500"],
  yAxis: {
    title: {
      text: null
    }
  },
  plotOptions: {
    line: {
      animation: false,
      dataLabels: {
        enabled: false
      },
      marker: {
        enabled: false
      }
    }
  },
  legend: {
    enabled: false
  },
  rangeSeletor: {
    enabled: true
  }
});

export default
Ember.ObjectController.extend({
  title: null,
  type: 'line',
  categories: [],
  data: [],
  highcharts: null,

  initGraph: function (render_to, data, categories, title) {
    var graph = GraphConfig;
    var graphType = 'line'

    graph.set('chartType', graphType)
    graph.set('renderToId', render_to)
    graph.set('series', data)
    graph.set('categories', categories)
    graph.set('title', title)

    graph.initialize()
    console.log(graph);
    var h = new Highcharts.Chart(graph);
    this.set('highcharts', h);
  },
  refresh: function (data, categories, title) {
    console.log('refreshing graph');
    this.get('highcharts').series[0].update(data[0]);
    this.get('highcharts').xAxis[0].update({categories: categories});
    this.get('highcharts').redraw();
  }
});

