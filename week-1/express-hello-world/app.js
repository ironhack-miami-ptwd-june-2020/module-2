const express = require("express");
// We create our own server named app
// Express server will be handling requests and responses
const app = express();

app.use(express.static("public"));

// our first Route - Get Route
app.get("/", (request, response, next) => {
    console.log(request);
    // response.send("<h1>Welcome Ironhacker. :)</h1>");
    response.sendFile(__dirname + "/views/index.html");
});

app.get("/dragon", (req, res, next) => {
    //     res.send(`
    //     <!doctype html>
    //     <html>
    //       <head>
    //         <meta charset="utf-8">
    //         <title>Dragon</title>
    //         <link rel="stylesheet" href="/css/style.css" />
    //       </head>
    //       <body>
    //         <h1>Dragon</h1>
    //         <p>This is my second route</p>
    //         <img src="/images/dragon2.jpg" alt="Dragon Image" />
    //       </body>
    //     </html>
    //   `);
    res.sendFile(__dirname + "/views/dragon-views/dragon.html");
});

// Server Started
app.listen(3000, () => console.log("My first app listening on port 3000! "));
