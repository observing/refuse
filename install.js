'use strict';

//
// Sit back children, it's story time.
//
// The installation script is required to figure out which file needs to be set as
// `main` in the package.json so the correct file gets required for
// `react-native` and regular, `react`.
//
// The require functionality doesn't support a special property like
// browserifies special "browser" field which indicates which file should be
// used as entry file for browsers vs node. The require in react-native actually
// reads this field as well and favors it over the `main` field without
// introducing a new option.
//
// This means we're left with 2 options, an index.js file which does an
// environment check to see file needs to be loaded or an installation step. An
// installation step is probably the safest bet as we could spider the parent
// packages and search for `react-native` in the dependencies and assume that
// this needs to run in an native environment instead.
//
var find = require('find-package-json')
  , refuse = require('./package.json')
  , path = require('path')
  , fs = require('fs')
  , finder
  , data;

//
// Start searching for package.json files in the parent directory so we don't
// have to worry about finding the package.json of this module.
//
finder = find(path.join(__dirname, '..'));

while (true) {
  data = finder.next();

  //
  // Bailout if we cannot find a package.json with react-native in it or find
  // a package.json uses our bailout key, `refuse: true`.
  //
  if (data.done || data.value.refuse === true) break;
  if (!('react-native' in (data.value.dependencies || {}))) continue;

  //
  // We've found react-native in the dependencies tree, so assume that we're
  // being consumed by native application.
  //
  refuse.main = 'native.js';
  fs.writeFileSync(
    path.join(__dirname, 'package.json'),
    JSON.stringify(refuse, null, 2)
  );
}
