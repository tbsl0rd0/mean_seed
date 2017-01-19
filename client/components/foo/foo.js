require('./foo.less');
var template = require('./foo.html');

angular.module('foo', [])
.component('foo', {
  template: template,
  controller: function() {}
});
