import { homedir } from 'os';
import { sep } from 'path';
var tildesep = "~".concat(sep);
var Ltildesep = tildesep.length;
export function expandUser(x) {
  var home = homedir();

  if (x === '~') {
    return home;
  }

  if (x.startsWith(tildesep)) {
    return home + sep + x.slice(Ltildesep);
  }

  return x;
}
;