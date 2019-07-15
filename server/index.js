
var express = require('express');
var app = express();

app.get("/", function(req, res) {
    res.send( `
        <html>
            <head>
            <script src="axios.js"></script>

            </head>
            <body>
                <button id="btn">Click me</button>

                <script>
                document.getElementById("btn").onclick= () => {
                    axios.get('/api/pathA').then((val) => {
                        alert("received: " + val.data);
                    });
                    alert("request sent");
                }

                axios.interceptors.request.use(function (config) {
                    return {
                        ...config,
                        url: config.url + '?value=hereissometesttext',
                      }
                  });

            </script>
            </body>
        </html>
    `)
});

app.get('/api/pathA', function (req, res) {
  res.send(req.query.value);
});

app.use(express.static('node_modules/axios/dist'));
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});