const Twitter = require('../lib/twitter')

class ApiServices {
  constructor () {
    this.twitter = new Twitter()
  }

  async getData (term) {
    try {
      const data = await this.twitter.getTweets(term)
      console.log(data)
      return Promise.resolve(data)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }
}

module.exports = ApiServices
