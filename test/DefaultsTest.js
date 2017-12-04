/**
 * Test for Defaults.
 * Runs with mocha.
 */
'use strict'

const Defaults = require('../lib/Defaults')
const {ok, equal} = require('assert')

describe('hostnames', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    for (const name of Object.keys(Defaults)) {
      ok(Defaults[name])
    }
  })
})

/* global describe, before, after, it */
