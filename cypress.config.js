const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.tourradar.com/d/'
  },
  viewportWidth: 1440,
  viewportHeight: 900,
  env: {
    europe_url: '/europe',
    email: 'tourradartech@yopmail.com',
    password: 'Passw0rd!'
  }
})