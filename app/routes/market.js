export default
Ember.Route.extend({
  model: function (params) {
    console.log('Getting market with ID=' + params.market_id);
    var self = this;
    return this.store.find('market', params.market_id).then(function (data) {
      return data;
    })
  },
  setupController: function (controller, model) {
    var self = this;
    controller.set('model', model);
  },
  actions: {
    refresh: function () {
      this.controllerFor('market.trades').refresh();
    }
  }
});

