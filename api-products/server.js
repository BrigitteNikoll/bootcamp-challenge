import express from "express";

const app = express();

// Launch server
app.listen(5000, () => {
    console.log("Iniatialized server!")
});