const expanduser = require('expanduser');

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
