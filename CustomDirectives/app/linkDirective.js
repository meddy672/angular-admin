(function(){

    var linkDemo = function(){
        return {

            restrict: 'A',
            link: function(scope, elem, attrs){
                elem.on('click', function(){
                    elem.html('You clicked me');
                });
                elem.on('mouseenter', function(){
                    elem.css('background-color', 'yellow');
                });
                elem.on('mouseleave', function(){
                    elem.css('background-color', 'white');
                });


            }
        }
    }
    var app = angular.module('directivesModule');

    app.directive('linkDemo', linkDemo);
}())