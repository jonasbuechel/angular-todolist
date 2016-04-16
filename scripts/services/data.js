/*jslint browser: true, devel: true, white: true, sloppy: true*/
/*global todoListApp */

var todoListApp = angular.module('todoListApp');

/* Service to get Mockdata */
todoListApp.service('dataService', function($http) {

    this.getTodos = function(callback) {
        console.log('dataService: getTodos');
        $http.get('mock/mockdata.json').then(callback);
    };

    this.deleteTask = function(task) {
        console.log('dataService: delete todo: ' + task.name);
    };

    this.addNewTask = function(task) {
        console.log('dataService: save todo: ' + task.name);
    };
});

