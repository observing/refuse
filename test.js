'use strict';

import assume from 'assume';
import Refuse from './index.js';
import refuse from './refuse.js';

describe('Refuse', function () {
  describe('refuse', function () {
    describe('#assign', function () {
      it('should return an empty object if no args are supplied', function () {
        var res = refuse.assign();

        assume(res).is.a('object');
        assume(res).has.length(0);
      });

      it('return a new object', function () {
        var supplied = { foo: 'bar' }
          , res = refuse.assign(supplied);

        assume(res).does.not.equal(supplied);
      });

      it('ignores undefined values', function () {
        var supplied = { foo: undefined, bar: 'bar', nope: null, nr: 0, str: '' }
          , res = refuse.assign(supplied);

        assume(res).deep.equals({ bar: 'bar', nope: null, nr: 0, str: '' });
      });

      it('merges multiple objecsts', function () {
        var res = refuse.assign({ foo: 'foo' }, { bar: 'bar' }, { banana: 'banana', foo: 'banana' });

        assume(res).deep.equals({ foo: 'banana', bar: 'bar', banana: 'banana' });
      });
    });
  });
});
