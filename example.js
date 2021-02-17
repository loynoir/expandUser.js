const expandUser = require('expandUser');
console.log(expandUser('~/~/foo/bar/'));

[
  '~',
  '~/',
  '~/foo',
  '~/foo/bar',
  '~/foo/bar/',
  '~foo',
  'foo',
  'foo~',
  'foo~bar',
].forEach((x) => {
  console.log(x, '=>', expandUser(x));
});
