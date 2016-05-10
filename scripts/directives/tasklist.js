/*jslint browser: true, devel: true, white: true, sloppy: true*/
/*global angular */

'use strict';

var todoListApp = angular.module('todoListApp');

/* add directive */
todoListApp.directive('tasklist', function() {
    return {
        templateUrl: 'templates/tasklist.html',
        controller: 'todoCtrl',
        replace: true
    };
});
