/*jslint browser: true, devel: true, white: true, sloppy: true*/
/*global angular */

'use strict';

var todoListApp = angular.module('todoListApp');

/* add a controller */
todoListApp.controller('todoCtrl', function($scope, dataService) {

    //Add data from service
    dataService.getTodos(function(response) {
        $scope.todolist = response.data;
    });

    //Declare newTask
    $scope.newTask = {};

    //Access service
    $scope.helloConsole = dataService.helloConsole;

    //add service deleteTodo to controller
    $scope.deleteTask = function(task, index) {
        //call service
        dataService.deleteTask(task);

        //update ui
        $scope.todolist.splice(index, 1);
    };

    //add service deleteTodo to controller
    $scope.addNewTask = function(newTask) {
        //call service
        dataService.addNewTask(newTask);

        //update ui
        if ($scope.newTask.name) {
            $scope.todolist.unshift(
                {
                    name: $scope.newTask.name || null,
                    completed: $scope.newTask.completed || false
                }
            );
            $scope.newTask.name = null;
        }
    };

});
