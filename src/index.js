import express from "express";

const app = express();
app.get("/", (req, res) => {

    res.send(`Hello World! => ${new Date()}`);
});

app.listen(3000, () => {
    console.log("The HTTP server is running on port 3000");
});
