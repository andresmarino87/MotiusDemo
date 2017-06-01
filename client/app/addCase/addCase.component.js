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
		var myJSON = JSON.stringify(task);
		this.$http.post('/api/tasks/', {
			title: task.title,
			body: "<p>"+task.body+"</p>"
		}).then(function successCallback(response) {
		}, function errorCallback(response) {
		});
	}

	isLoading() {
    	return this.$http.pendingRequests.length > 0;
	}
}

export default angular.module('Add', [uiRouter])
	.config(routes)
	.component('addCase', {
		template: require('./addCase.html'),
		controller: AddCaseComponent,
}).name;
