var path = require('path')

module.exports = {
  development: {
    proxyTable: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api/([^\?]+)(.*)$': '/debug/$1.json$2'
        }
      }
    }
  },
  debug: {
    proxyTable: {
      '/api': {
        target: 'http://127.0.0.1:9099'
      }
    }
  },
  release: {
    proxyTable: {
      '/api': {
        target: 'https://127.0.0.1:9099'
      }
    }
  }
}
