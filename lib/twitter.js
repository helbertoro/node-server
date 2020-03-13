const twitter = require('twitter')
const data = require('../__mocks/db')

class Twitter {
  constructor () {
    this.data = data
  }

  getTweets (term) {
    return Promise.resolve(this.data)
  }
}

module.exports = Twitter
