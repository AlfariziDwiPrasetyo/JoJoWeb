const express = require("express")
app = express()
app.set('view engine', 'ejs')

const url = 'https://stand-by-me.herokuapp.com/api/v1/characters'
let dataChars = null
let dataStands = null

app.use((req,res,next) =>{
    if(!dataChars){
        fetch(url)
        .then((res) => {return res.json()})
        .then(data => {
            dataChars = data
            req.dataChars = data
            next()})
        .catch(err => {console.log(err)})
    }else{
        req.dataChars = dataChars
        next()
    }
})


app.get("/",(req,res)=>{
    res.render("home", {datas : req.dataChars})
})
    

app.listen(3000,()=>{
    console.log("Server Running.....")
})