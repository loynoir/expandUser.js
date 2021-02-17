const expanduser = require('expanduser');
console.log(expanduser('~/~/foo/bar/'));

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
  console.log(x, '=>', expanduser(x));
});
