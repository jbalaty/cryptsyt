export default
Ember.Route.extend({
  model: function (params, data) {
    this.set('market', data.resolvedModels.market);
    var market = this.get('market');
    return this.store.find('market_trade', {marketid: market.get('marketid')});
  },
  setupController: function (controller, model) {
    controller.set('model', model);
    var market = this.get('market');
    this.store.find('candlestick', {marketid: market.get('marketid'), interval_seconds: 900})
        .then(function (data) {
          controller.set('candlesticks', data);
        });
  },
  activate: function () {
    var controller = this.controllerFor('market');
    controller.set('lastChildRoute', this.routeName);
  }
});

