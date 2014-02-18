export default
DS.Model.extend({
  order_type: DS.attr('string'),
  price: DS.attr('number'),
  quantity: DS.attr('number'),
  total: DS.attr('number'),

  market: DS.belongsTo('market')
});

