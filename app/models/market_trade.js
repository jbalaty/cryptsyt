export default
DS.Model.extend({
  marketid: DS.attr('string'),
  tradeid: DS.attr('string'),
  datetime: DS.attr('date'),
  tradeprice: DS.attr('number'),
  quantity: DS.attr('number'),
  total: DS.attr('number'),
  initiate_ordertype: DS.attr('string'),

  market: DS.belongsTo('market')
});

