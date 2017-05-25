import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  $http;
  tasks = [];
//  newThing = '';

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/tasks')
      .then(response => {
        this.tasks = response.data;
      });
  }

//  addThing() {
 //   if(this.newThing) {
  //    this.$http.post('/api/things', {
   //     name: this.newThing
    //  });
 //     this.newThing = '';
  //  }
 // }

//  deleteThing(thing) {
 //   this.$http.delete(`/api/things/${thing._id}`);
 // }

}

export default angular.module('motiusDemoApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
