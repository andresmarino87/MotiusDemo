'use strict';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routes from './addCase.routes';

export class AddCaseComponent {
	$http;

	/*@ngInject*/
	constructor($http) {
		this.$http = $http;
	}

	addTask(task) {
		console.log(task);
		var myJSON = JSON.stringify(task);
console.log(myJSON);
		this.$http.post('/api/tasks/', {
			task
		}).then(function successCallback(response) {
		console.log("success");
		console.log(response);

    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
		console.log("error");
		console.log(response);
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
	}
}

export default angular.module('Add', [uiRouter])
	.config(routes)
	.component('addCase', {
		template: require('./addCase.html'),
		controller: AddCaseComponent,
}).name;
