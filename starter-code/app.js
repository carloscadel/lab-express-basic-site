const express = require('express');
// We create our own server named app
// Express server handling requests and responses
const app = express();

app.use(express.static('public'))

app.get("/", (request, response) => {
    console.log(request)
    response.sendFile(__dirname + "/views/home-page.html")
})
app.get("/about", (request, response) => {
    console.log(request)
    response.sendFile(__dirname + "/views/about.html")
})
app.get("/photo-gallery", (request, response) => {
    console.log(request)
    response.sendFile(__dirname + "/views/photo-gallery.html")
})

app.listen(3000)
