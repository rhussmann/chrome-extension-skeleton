(function(){
  var app = angular.module('extensionApp', []);
  app.controller('formController', function() {
    this.submit = function() {
      console.log("Submitting!");
    };
  });
})();
