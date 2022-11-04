const express = require('express');
const port = process.env.PORT || 8080;

const app = express();

app.get('/', (request, response) => {
    response.send(`<!DOCTYPE html>
<html>
  <head>
    <title>BizflyCloud App Engine</title>
  </head>
  <body>
    <img style="display: block; margin-left: auto; margin-right: auto; width: 50%;" src="https://techvccloud.mediacdn.vn/2018/12/5/logofacebook-1543996079655547158445-crop-1543996085792308014951.png"></img>
  </body>
</html>`);
});

app.listen(port);