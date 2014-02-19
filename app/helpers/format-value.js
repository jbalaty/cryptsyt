export default
Ember.Handlebars.makeBoundHelper(function (value, options) {
//  var value = this[prop];
  var numberTypes = ["currency", "number", "percent"];
  var type = options.hash.type || "string";

  // Convert to number
  if (numberTypes.indexOf(type) !== -1) {
    var decimals = options.hash.decimals || 2;
    value = Number(value).toFixed(decimals);
//    value = commaSeparateNumber(value);

    switch (type) {
      case "currency":
        value = "$" + value;
        break;
      case "percent":
        value += "%";
        break;
    }
  }
  else {
    value = value.toString();
  }
  return value;
});