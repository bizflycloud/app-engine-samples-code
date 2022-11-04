const http = require('http')
const port = process.env.PORT || 8080

const requestHandler = (request, response) => {
    response.end(`<!DOCTYPE html>
<html>
  <head>
    <title>BizflyCloud App Engine</title>
  </head>
  <body>
    <img style="display: block; margin-left: auto; margin-right: auto; width: 50%;" src="https://techvccloud.mediacdn.vn/2018/12/5/logofacebook-1543996079655547158445-crop-1543996085792308014951.png"></img>
  </body>
</html>`)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})