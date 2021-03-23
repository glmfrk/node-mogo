const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("I know that, how to open node ...YAH!");
})
app.listen(3000, () => console.log("listing to port 3000"))