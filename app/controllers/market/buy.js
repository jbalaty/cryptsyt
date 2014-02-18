export default
Ember.ArrayController.extend({
  needs: ['market'],
  market: Ember.computed.alias("controllers.market"),
  sortProperties: ['price'],
  sortAscending: true,

  refresh: function () {
    this.set('content', []);
    this.set('content', this.store.find('market_order', {marketid: this.get('market.marketid')}));
  }
});