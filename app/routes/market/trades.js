export default
Ember.Route.extend({
  model: function (params, data) {
    var market = data.resolvedModels.market;
    return this.store.find('market_trade', {marketid: market.get('marketid')});
  }
});

