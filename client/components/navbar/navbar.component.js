'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
	menu = [{
		title: 'Usecases',
		state: 'main',
		icon: 'fa-home'
	}, {
		title: 'Add',
		state: 'addCase',
		icon: 'fa-plus'
	}, {
		title: 'milestones',
		state: 'milestones',
		icon: 'fa-plus'
	}];
	isCollapsed = true;
}

export default angular.module('directives.navbar', []).component('navbar', {
	template: require('./navbar.html'),
	controller: NavbarComponent
}).name;
