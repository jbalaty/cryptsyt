export default
Ember.ArrayController.extend({
  needs: ['application'],
  showSidebar: Ember.computed.alias('controllers.application.showSidebar')
});