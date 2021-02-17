const { homedir } = require('os');
const path = require('path');

const tildesep = `~${path.sep}`;
const Ltildesep = tildesep.length;

module.exports = function expandUser(x) {
  const home = homedir();
  if (x === '~') {
    return home;
  } if (x.startsWith(tildesep)) {
    return home + path.sep + x.slice(Ltildesep);
  }
  return x;
};
