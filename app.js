import express from "express"
import request from "request"
import fetch from "node-fetch"
const app = express();

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.get('/get', async (req, res) => {
    const getData = await new Promise(res=>{
        request("https://dummyjson.com/products/1", (error, response, body)=>{
            res({response, body})
        })
    }) 
    // console.log(getData)
    res.send({status: "success", data: getData});
});

app.get('/getData', async (req, res) => {
    const getData = await Promise.resolve(request("https://dummyjson.com/products/1"))
    // console.log(getData)
    res.send({status: "success", data: getData});
});

app.get("/fetch", async (req,res)=>{
    const fetchData = await fetch("https://dummyjson.com/products/1")
    res.send({status: "success", data: fetchData});
})


app.listen(3000, () => console.log('Example app is listening on port 3000.'));