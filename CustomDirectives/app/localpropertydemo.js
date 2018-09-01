(function() {

    var app = angular.module('directivesModule');

    app.directive('localProperty', function() {
        return {
            scope: {
                name:'@'
            },
            template: 'Name: {{name}}'
        };
    });

}());
