const app = angular.module('MainApp',[])

// .run(['$anchorScroll', function($anchorScroll) {
//   $anchorScroll.yOffset = 0;
// }])


app.controller('MainController', ['$http', function($http){
  const controller = this;

  this.includePath = 'partials/main.html';
  this.changeInclude = (path) => {
  this.includePath = 'partials/'+ path +'.html';
  }

  // $http.gotoTop = function() {
  //   $location.hash('top');
  //   $anchorScroll();
  // };


}])


app.controller('MainCtrl', function($scope, $location, $anchorScroll) {
  $scope.scrollTo = function(id) {
    $location.hash(id);
    console.log($location.hash());
    $anchorScroll();
  };
});
