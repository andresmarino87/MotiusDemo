'use strict';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routes from './addCase.routes';

export class AddCaseComponent {
	$http;
	buttonLabel = '';

	/*@ngInject*/
	constructor($http) {
		this.$http = $http;
	}

	/* Add new task funcionality */
	addTask(task) {
		var body = `<p> ${task.body} </p>`;
		this.$http.post('/api/tasks/', {
			title: task.title,
			body: body
		}).then(function successCallback(response) {
			console.log(response);
			task.title = '';
			task.body = '';
		}, function errorCallback(response) {
			console.log(response);
		});
	}

	isLoading() {
		var res = this.$http.pendingRequests.length > 0;
		this.buttonLabel = res ? 'Creating' : 'Create';
		return res;
	}
}

export default angular.module('Add', [uiRouter])
	.config(routes)
	.component('addCase', {
		template: require('./addCase.html'),
		controller: AddCaseComponent,
	}).name;
