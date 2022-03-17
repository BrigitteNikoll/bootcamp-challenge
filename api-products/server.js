import express from "express";
import mongosse from "mongosse";

/* EXPRESS */
const app = express();

// Routes
app.get('/', (request, response) => {
    response.send('Hola!')
})
app.get('/products', (request, response) => {
    /*     console.log("request", request) */
    console.log("request", request.query)
    response.send("<h1>Products!<h1>");
})

// Launch server in port 5000
app.listen(5000, () => {
    console.log("Iniatialized server!")
});