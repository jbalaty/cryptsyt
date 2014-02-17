export default
DS.Model.extend({
  marketid: DS.attr(),
  tradeid: DS.attr(),
  datetime: DS.attr(),
  tradeprice: DS.attr(),
  quantity: DS.attr(),
  total: DS.attr(),
  initiate_ordertype: DS.attr(),

  market: DS.belongsTo('market')
});

