export default
DS.Model.extend({
  label: DS.attr(),
  marketid: DS.attr(),
  primary_currency_code: DS.attr(),
  primary_currency_name: DS.attr(),
  secondary_currency_code: DS.attr(),
  secondary_currency_name: DS.attr(),

  market_trades: DS.hasMany('market_trade')
});

