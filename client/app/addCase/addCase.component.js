'use strict';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routes from './addCase.routes';

export class AddCaseComponent {
	$http;
	button_label = "";

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
			task.title = '';
			task.body = '';
		}, function errorCallback(response) {
		});
	}

	isLoading() {
		var res = this.$http.pendingRequests.length > 0;
		this.button_label = (res) ? "Creating":"Create";
    	return res;
	}
}

export default angular.module('Add', [uiRouter])
	.config(routes)
	.component('addCase', {
		template: require('./addCase.html'),
		controller: AddCaseComponent,
}).name;
