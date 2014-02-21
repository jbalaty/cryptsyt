export default
Ember.ArrayController.extend({
  needs: ['market', 'graph'],
  market: Ember.computed.alias("controllers.market"),
  candlesticks: [],

//  data: function () {
//    if (this.get('content.content')) {
//      var result = [
//        {name: 'price', data: this.get('content.content').map(function (trade) {
//          return trade.get('tradeprice');
//        })}
//      ];
//      return result;
//    } else return {};
//  }.property('content.@each'),


  graph_data: function () {
    var csticks = this.get('candlesticks');
    if (csticks) {
      var result = [
        {name: 'price', data: csticks.toArray().map(function (cs) {
          return cs.get('open');
        })}
      ];
      return result;
    } else return {};
  }.property('candlesticks.@each'),

  graph_categories: function () {
    var csticks = this.get('candlesticks');
    if (csticks) {
      var result = csticks.toArray().map(function (cs) {
        var value = cs.get('interval_end');
        return moment(value).utc();
      });
      return result;
    } else return [];
  }.property('candlesticks.@each'),

  refresh: function () {
    this.set('content', []);
    this.set('content', this.store.find('market_trade', {marketid: this.get('market.marketid')}));
    var self = this;
    this.store.find('candlestick', {marketid: this.get('market.marketid'), interval_seconds: 900})
        .then(function (data) {
          self.set('candlesticks', data);
        });
  }
});