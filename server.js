import express from "express"

const app = express();


app.get('/',(req,res) => {
    res.send("connection prototype")
})

app.listen(3000);