require('./mean_seed.less');
var template = require('./mean_seed.html');

angular.module('mean_seed', ['foo'])
.component('meanSeed', {
  template: template,
  controller: function() {}
});
