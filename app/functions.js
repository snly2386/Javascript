if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        newray = []
        for(var i = 0; i < arr.length; i++) {
            newray.push(arr[i])
        }
           one = newray[0]
           two = newray[1]
           three = newray[2]
           return fn(one,two,three)
    },

    speak : function(fn, obj) {
        return fn.call(obj)
    },

    functionFunction : function(str) {

    },

    makeClosures : function(arr, fn) {

    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
