/**
 * Test for Hostnames.
 * Runs with mocha.
 */
'use strict'

const Hostnames = require('../lib/Hostnames')
const {ok, equal} = require('assert')

describe('hostnames', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    for (const name of Object.keys(Hostnames)) {
      ok(Hostnames[name])
    }
  })
})

/* global describe, before, after, it */
