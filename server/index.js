var express = require('express')
var path = require('path')
var port = process.env.PORT || 9099
var axios = require('axios')

var app = express()
var apiRoutes = express.Router()

apiRoutes.get('/testProxy', function (req, res) {
  res.json({
    "data" : {
      "content": "from_server"
    },
    "message": {
      "message": "",
      "code": 0
    }
  })
})

apiRoutes.get('/', function (req, res, next) {
  res.send('hello')
})

app.use('/api', apiRoutes) // /api/getlist

app.use(express.static('../dist'))
app.use('/', express.static(path.resolve(__dirname, '../dist')))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
