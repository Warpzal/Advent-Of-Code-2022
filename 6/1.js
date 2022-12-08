"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var datastreamBuffer = (0, fs_1.readFileSync)('./input.txt', 'utf-8');
var getFirstMarker = function (buffer) {
    var uniqueChars = 14;
    for (var i = uniqueChars; i < buffer.length - uniqueChars + 1; i++) {
        var start = i - uniqueChars;
        var subset = buffer.slice(start, start + uniqueChars);
        var set = new Set(subset);
        if (set.size >= uniqueChars)
            return i;
    }
    return 0;
};
console.log(getFirstMarker(datastreamBuffer));
