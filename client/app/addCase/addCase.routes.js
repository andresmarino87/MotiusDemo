'use strict';

export default function($stateProvider) {
	'ngInject';

	$stateProvider.state('addCase', {
		url: '/addCase',
		template: '<add-case></add-case>'
	});
}
