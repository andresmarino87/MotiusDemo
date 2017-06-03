import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
	$http;
	tasks = [];
	modal;

	/*@ngInject*/
	constructor($http, $uibModal) {
		this.$http = $http;
		this.modal = $uibModal;
	}

	$onInit() {
		this.$http.get('/api/tasks').then(response => {
			this.tasks = response.data;
		});
	}

	display_milestone(task) {
//		const modalTemplate = '<div class="source-list-modal"><div class="modal-header"><h3 class="modal-title">My Modal Title</h3><div class="controls"><button class="btn btn-primary" type="button" ng-click="save()">Save</button></div></div><div class="modal-body"><my-directive some-data="syncData" more-data="asyncData"></my-directive></div></div>';
		console.log(task.milestones);
		this.modal.open({
			animation: true,
			templateUrl: 'http://localhost:3000/addCase'
		//user => {
//      user.$remove();
  //    this.users.splice(this.users.indexOf(user), 1);
   // }
		}).result.then(function() {}, function(res) {
			console.log(res);
		});
	}
}

export default angular.module('motiusDemoApp.main', [uiRouter])
	.config(routing)
	.component('main', {
		template: require('./main.html'),
		controller: MainController
	}).name;
