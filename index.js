'use strict';

//
// Awful hack which should be refactored asap. Make the assumption that when
// react-native can get required, we need to export our native library.
//
// If an error is thrown ship the default library.
//

try {
  require('react-native');
  module.exports = require('./native');
} catch (e) {
  module.exports = require('./react');
}
