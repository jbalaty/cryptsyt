import GraphController from "appkit/controllers/graph";
export default
Ember.View.extend({
  tagName: 'div',
  classNames: [ 'highcharts' ],
  categories: [],
  data: [],
  graphController:null,

  didInsertElement: function () {
    var graph = new GraphController();
    graph.initGraph(this.get('elementId'), this.get('data'), this.get('categories'), this.get('title'));
    this.set('graphController',graph);
  },

  refresh:function(){
    var graph = this.set('graphController',graph);
    graph.destroyGraph();
    graph.initGraph(this.get('elementId'), this.get('data'), this.get('categories'), this.get('title'));
//    this.get('graphController').refresh(this.get('data'), this.get('categories'), this.get('title'));
  }.observes('data.@each','categories.@each')
});