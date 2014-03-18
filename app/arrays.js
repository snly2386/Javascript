if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item)
    },

    sum : function(arr) {
        var sum = 0
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
            return sum;
    },

    remove : function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == item) {
                arr.splice(i, 1);
            }
        }
         return arr
        
        
    },

    removeWithoutCopy : function(arr, item) {
        var i, h;
        for (i = 0, h = arr.length; i < h; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1)
                i = i - 1
                h = h - 1
            }
        }
                return arr;
    },

    append : function(arr, item) {
         arr.push(item)
         return arr

    },

    truncate : function(arr) {
        arr.pop()
        return arr

    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;

    },

    curtail : function(arr) {
        arr.shift()
        return arr
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2)
    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item)
        return arr
    },

    count : function(arr, item) {
        var count = 0;
        for ( var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                count++;
            }
        }
                return count;
    },

    duplicates : function(arr) {
        var newarray = [];
        var sorted = arr.sort();

        for(var i = 0; i < sorted.length-1; i++ ) {
            if(sorted[i+1] == sorted[i]) {
                newarray.push(sorted[i])
            }
        }
            return newarray;

    },

    square : function(arr) {
        var newarray = []
        for (var i =0; i < arr.length; i++) {
            newarray.push(arr[i] * arr[i])
        }
            return newarray;
    },

    findAllOccurrences : function(arr, target) {
        var newarray = [];
        for ( var i = 0; i < arr.length; i++) {
            if(arr[i] == target) {
                newarray.push(i)
            }
        }
            return newarray;
    }
  };
});
