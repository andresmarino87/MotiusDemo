'use strict';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routes from './addCase.routes';

export class AddCaseComponent {
	$http;
	tasks = [];

	/*@ngInject*/
	constructor($http) {
		this.$http = $http;
	}

	$onInit() {
		this.$http.get('/api/tasks').then(response => {
			this.tasks = response.data;
		});
	}
}

export default angular.module('Add', [uiRouter])
	.config(routes)
	.component('addCase', {
		template: require('./addCase.html'),
		controller: AddCaseComponent,
}).name;
