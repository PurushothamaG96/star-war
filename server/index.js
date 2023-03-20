const express = require("express")
const cors = require("cors")
const app = express()
const axios = require("axios")
app.use(express.json())
app.use(express.urlencoded())

app.use(cors())
app.get("/app/:id", async(req, res)=>{
    try{
        console.log(req.params.id)
        const page = req.params.id
        const response =await axios.get(`https://swapi.dev/api/people/?page=${page}`)
        res.status(200).json(response.data.results)
    }catch(e){
        res.status(404).json({
            status:"not found",
            message:e
        })
    }
})

    app.get("/app/search/:id", async(req, res)=>{
        try{
            console.log(req.params.id)
            const id = req.params.id
            const response =await axios.get(`https://swapi.dev/api/people/${id}`)
            console.log(response.data)
            res.status(200).json(response.data)
        }catch(e){
            res.status(404).json({
                status:"not found",
                message:e
            })
        }

    
    

})

app.listen(5000, (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server is up")
    }
})