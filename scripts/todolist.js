/*jslint browser: true, devel: true, white: true, sloppy: true*/
/*global angularPlaygroundApp */

/* add a controller */
angularPlaygroundApp.controller('todoCtrl', function($scope, dataService) {

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
            $scope.todolist.push(
                {
                    name: $scope.newTask.name || null,
                    completed: $scope.newTask.completed || false
                }
            );
            $scope.newTask.name = null;
        }
    };

});

/* add directive */
angularPlaygroundApp.directive('todoList', function() {

    return {
        template: 'saved values: {{todolist}}',
        restrict: 'E' //just allow integration as html element
    };
});

/* Service to get Mockdata */
angularPlaygroundApp.service('dataService', function($http) {

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

