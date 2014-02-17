export default
Ember.Controller.extend({
  init: function () {
//
  },
  showSidebar: false,
  bookmarks: [],

  onBookmarksChange: function () {
    // store bookmarks in local storage
    window.localStorage.setItem('application.bookmarks', JSON.stringify(this.get('bookmarks')));
  }.observes('bookmarks.@each')
});