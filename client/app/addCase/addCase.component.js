'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './addCase.routes';

export class AddCaseComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('Add', [uiRouter])
  .config(routes)
  .component('addCase', {
    template: require('./addCase.html'),
    controller: AddCaseComponent,
    controllerAs: 'addCaseCtrl'
  })
  .name;
