'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
import ngVis from 'angular-visjs';
import $ from 'jquery';

export class MainController {
	$http;
	$modal;
	tasks = [];
	VisDataSet;
	options = {};

	/*@ngInject*/
	constructor($http, $uibModal, VisDataSet) {
		this.$http = $http;
		this.$modal = $uibModal;
		this.VisDataSet = VisDataSet;
		this.options = {
			align: 'center',
			autoResize: true,
			editable: true,
			selectable: true,
			orientation: 'bottom',
			showCurrentTime: true,
			showMajorLabels: true,
			showMinorLabels: true
		};
	}

	$onInit() {
		// Load initial data
		this.$http.get('/api/tasks').then(response => {
			this.tasks = response.data;
		});

		/***** CLOSE POPUP and destroy previus timelines ******/
		$(function() {
			$('#close-popup').on('click', function() {
				$('#popup').fadeOut(350);
				$('#timeline').empty();
			});
		});
	}

	// Handle the show of the milestone 
	displayMilestone(task) {
		$('#popup').fadeIn(350);
		var container = document.getElementById('timeline');

		// Create a DataSet with data (enables two way data binding)
		var data = this.VisDataSet();
		for(var i = 0; i < task.milestones.length; i++) {
			data.add({
				id: i,
				content: task.milestones[i].name,
				start: task.milestones[i].start_date,
				end: task.milestones[i].start_date.end_date
			});
		}

		// Create the timeline
		var timeline = new vis.Timeline(container, data, this.options);
	}
}


export default angular.module('motiusDemoApp.main', [uiRouter, 'ngVis'])
	.config(routing)
	.component('main', {
		template: require('./main.html'),
		controller: MainController
	}).name;
