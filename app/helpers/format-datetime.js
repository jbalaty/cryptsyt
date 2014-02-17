export default Ember.Handlebars.makeBoundHelper(function(value, options) {
  var format = 'YYYY-MM-DD HH:mm:ss';
  if (options.hash.format) {
    format = options.hash.format;
  }
  if (value) {
    var time = moment(value).utc().format(format);
    return new Handlebars.SafeString('<span class="timestamp">' + time + '</span>');
  }
});


//export default Ember.Handlebars.makeBoundHelper(function(value, options) {
//
//});