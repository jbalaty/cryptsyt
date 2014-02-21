export default
Ember.Route.extend({
  deactivate: function () {
    this.controller.set('showThankYouMessage', false);
  }
});

