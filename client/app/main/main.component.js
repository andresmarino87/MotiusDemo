import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
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

	display_milestone(task){
		console.log(task.title);
	}

}

export default angular.module('motiusDemoApp.main', [uiRouter])
	.config(routing)
	.component('main', {
		template: require('./main.html'),
		controller: MainController
	}).name;
