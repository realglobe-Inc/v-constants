'use strict'

const {Defaults} = require('v-constants')

async function tryExample () {
  const {HOSTNAME} = Defaults
  console.log(HOSTNAME)
}

tryExample().catch((err) => console.error(err))
