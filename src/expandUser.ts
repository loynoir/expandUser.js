import { homedir } from 'os'
import { sep } from 'path'

const tildesep = `~${sep}`;
const Ltildesep = tildesep.length;

export function expandUser(x: string): string {
  const home = homedir();
  if (x === '~') {
    return home;
  } if (x.startsWith(tildesep)) {
    return home + sep + x.slice(Ltildesep);
  }
  return x;
};
