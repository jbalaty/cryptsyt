export default
Ember.Controller.extend({
  needs: ['application'],
  showSidebar: Ember.computed.alias('controllers.application.showSidebar'),
  input: null,
  choices: ['Buf', 'Feature', 'Opinion', 'Other'],
  selectedChoice: null,
  showThankYouMessage: false,

  actions: {
    submit: function () {
      var self = this;
      var inputMessage = this.get('input');
      Ember.$.ajax({url: window.ENV.api_url + "/feedbacks",
        data: {message: inputMessage},
        type: 'POST',
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
        }
      }).then(function () {
            self.set('showThankYouMessage', true);
            self.set('input', null);
          }, function (reason) {
            alert('Feedback was not sent, because of: ' + reason.textStatus);
          })
    }
  }
});