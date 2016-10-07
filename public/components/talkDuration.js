/**
 * Created by sdonose on 10/6/2016.
 */
angular.module('app').filter('talkDuration', function() {
    return function(duration) {
        return "Duration: " + duration + " minutes";
    }
});
