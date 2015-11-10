import angular from 'angular';

import myController from './controllers/mycontroller';

angular.module("app", [])

.controller('myController', myController);

console.log(angular.version.full);

// angular.module("clickey", [])

// .controller("MyController", MyController);

console.log('mainjs');


