/**
 * Created by sdonose on 10/6/2016.
 */
angular.module('app').directive('zoomIn', function() {
    return {
        restrict: 'A',
        link: function(scope, el, attrs) {
            el.on('mouseenter', function() {
                el[0].style.transform="scale(1.1,1.1)"
            })
            el.on('mouseleave', function() {
                el[0].style.transform="scale(1,1)"
            })
        }
    }
})

