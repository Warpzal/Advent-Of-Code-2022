"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var lines = (0, fs_1.readFileSync)('./input.txt', 'utf-8').trim().split('\n');
var sizes = {};
var path = [];
var cd = function (dir) {
    if (dir === '..') {
        path.pop();
        return;
    }
    path.push(dir);
};
var _loop_1 = function (line) {
    var words = line.split(' ');
    if (words[1] === 'ls' || words[0] === 'dir')
        return "continue";
    if (words[1] === 'cd') {
        cd(words[2]);
        return "continue";
    }
    var size = +words[0];
    path.forEach(function (dir, index) {
        var key = path.slice(0, index + 1).join('/');
        if (!sizes[key])
            sizes[key] = 0;
        sizes[key] += size;
    });
};
for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
    var line = lines_1[_i];
    _loop_1(line);
}
var sum = Object.keys(sizes).reduce(function (total, key) {
    if (sizes[key] <= 100000)
        return total + sizes[key];
    return total;
}, 0);
console.log(sizes);
console.log(sum);
