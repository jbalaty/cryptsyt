export default
Ember.Route.extend({
  setupController: function () {
//    this.set('bookmarks', this.store.find('bookmark'));
    var bms = JSON.parse(window.localStorage.getItem('application.bookmarks') || null) || [];
    this.controller.set('bookmarks', bms);
  },


  actions: {
    showSidebar: function () {
      this.controller.set('showSidebar', true);
    },
    hideSidebar: function () {
      this.controller.set('showSidebar', false);
    },
    historyBack: function () {
      window.history.back();
    },
    willTransition: function (transition) {
      this.controller.set('showSidebar', false);
    },
    addBookmark: function (market) {
//      var id = this.get('model.id');
      var id = market.get('id');
      var label = market.get('label');
      var bm = this.controller.get('bookmarks').findBy('id', id);
      if (!bm) {
        bm = {id: id, label: label};
        this.controller.get('bookmarks').pushObject(bm);
      }
    },
    removeBookmark: function (market) {
//      var id = this.get('model.id');
      var id = market.get('id');
      //find existing bookmark
      var bm = this.controller.get('bookmarks').findBy('id', id);
      if (bm) {
        this.controller.get('bookmarks').removeObject(bm);
      }
    }
  }
});