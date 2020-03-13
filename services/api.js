class ApiServices {
  constructor () {}

  getData (term) {
    return Promise.resolve(term)
  }
}

module.exports = ApiServices
