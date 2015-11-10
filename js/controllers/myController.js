

let myController = function($scope) {


  $scope.number=0;

  $scope.plural='s';

  $scope.clickey = function () {
    $scope.number++;

    $scope.plural = ($scope.number === 1) ? ' ' : 's';
  };
};

myController.$inject=['$scope'];

export default myController;

console.log('myController');