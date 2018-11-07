const app = angular.module('MainApp',[])

app.controller('MainController', ['$http', function($http){
  const controller = this;
  this.includePath = 'index.html';
  this.changeInclude = (path) => {
    this.includePath = 'partials/' + path + '.html';
  }


}])
