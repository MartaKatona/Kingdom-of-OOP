'use strict';

var Eukaryota = require('./Eukaryota.js');

module.exports = class Fungi extends Eukaryota {
  constructor(name, symmetry) {
    super(name, false, false, true, true);
    this._symmetry = symmetry;
  }

  get symmetry () {
    return this._symmetry;
  }

  set symmetry (symmetry) {
    if (typeof symmetry !== 'string') {
      throw new TypeError('livingThing.symmetry must be a string');
    }
    this._symmetry = symmetry;
  }

};