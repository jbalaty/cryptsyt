var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.resource('markets');
  this.resource('market', {path:'/market/:market_id'}, function(){
    this.route('trades');
    this.route('buy');
    this.route('sell');
  });
  this.route('settings');
});

export default Router;
