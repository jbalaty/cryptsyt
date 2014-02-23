export default
Ember.ObjectController.extend({
  needs: ['application'],
  showSidebar: Ember.computed.alias('controllers.application.showSidebar'),
  bookmarks: Ember.computed.alias('controllers.application.bookmarks'),

  isBookmarked: function () {
    var id = this.get('model.id');
    var bm = this.get('bookmarks').findBy('id', id);
    return !!bm
  }.property('controllers.application.bookmarks.@each', 'model'),

  cryptsyLink: function () {
    return 'https://www.cryptsy.com/markets/view/' + this.get('marketid');
  }.property('model')

});