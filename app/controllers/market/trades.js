export default
Ember.ArrayController.extend({
  needs: ['market','graph'],
  market: Ember.computed.alias("controllers.market"),

  data: function () {
    if (this.get('content.content')) {
      return [
        {name: 'price', data: this.get('content.content').map(function (trade) {
          return trade.get('tradeprice');
        })}
      ];
    } else return {};
  }.property('content.@each'),

  categories: function () {
    if (this.get('content.content')) {
      return this.get('content.content').map(function (trade) {
        var d = trade.get('datetime');
        return d.getHours()+':'+ d.getMinutes();
      });
    } else return [];
  }.property('content.@each'),

  refresh: function () {
    this.set('content', []);
    this.set('content', this.store.find('market_trade', {marketid: this.get('market.marketid')}));
  }

});