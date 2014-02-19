export default
Ember.Handlebars.makeBoundHelper(function (value, options) {
  // Convert to number
  var decimals = options.hash.decimals || 8;
  value = Number(value).toFixed(decimals);
  return value;
});