(function(){

    var app = angular.module('directivesModule');

    app.directive('twoWayBindingWithObject',function(){

        return {
            scope: {
                datasource: '='
            },
            template: 'Name: {{datasource.name}} Street: {{datasource.street}}' +
            '<br /><button ng-click="datasource.name=\'Fred\'">' +
            'Change</button>'
        }
    })
}())