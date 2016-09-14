'use strict';

var Animal = require('./Animal.js');

module.exports = class Bilateral extends Animal {
  constructor(name, body) {
    super(name, 'bilateral');
    this._body = body;
  }

  get body () {
    return this._body;
  }

  set body (body) {
    if (typeof body !== 'string') {
      throw new TypeError('livingThing.body must be a string');
    }
    this._body = body;
  }
};