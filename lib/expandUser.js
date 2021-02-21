"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expandUser = expandUser;

var _os = require("os");

var _path = require("path");

var tildesep = "~".concat(_path.sep);
var Ltildesep = tildesep.length;

function expandUser(x) {
  var home = (0, _os.homedir)();

  if (x === '~') {
    return home;
  }

  if (x.startsWith(tildesep)) {
    return home + _path.sep + x.slice(Ltildesep);
  }

  return x;
}

;