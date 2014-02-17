export default
Ember.ArrayController.extend({
  needs: ['market'],
  market: Ember.computed.alias("controllers.market"),
  market_trades: null,

  refresh: function () {
    this.set('content', []);
    this.set('content', this.store.find('market_trade', {marketid: this.get('market.marketid')}));
    //this.get('model').reload();
  }

//  refresh: function () {
//    var self = this;
//    this.set('market_trades', null);
//    this.store.find('market_trade', {marketid: this.get('marketid')}).then(function (data) {
//      self.set('market_trades', data);
//    });
//  }
});