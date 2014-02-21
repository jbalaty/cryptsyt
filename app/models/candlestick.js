export default
DS.Model.extend({
  marketid: DS.attr('string'),
  interval_start: DS.attr('date'),
  interval_end: DS.attr('date'),
  interval_seconds: DS.attr('number'),
  open: DS.attr('number'),
  close: DS.attr('number'),
  high: DS.attr('number'),
  low: DS.attr('number'),

  market: DS.belongsTo('market')
});

