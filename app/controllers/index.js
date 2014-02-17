export default Ember.Controller.extend({
  needs:['application'],
  showSidebar : Ember.computed.alias('controllers.application.showSidebar')
});