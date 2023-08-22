const express = require("express")
const expressLayouts = require("express-ejs-layouts")


app = express()
app.set('view engine', 'ejs')
app.use(expressLayouts)

const urlChars = 'https://stand-by-me.herokuapp.com/api/v1/characters'
const urlStands = 'https://stand-by-me.herokuapp.com/api/v1/stands'
let dataChars = null
let dataStands = null

// fetch data chars by middleware
const fetchChar = (req,res,next) => {
    if(!dataChars){
        fetch(urlChars)
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
}

// fetch data stands by middleware
const fetchStands = (req,res,next) => {
    if(!dataChars){
        fetch(urlStands)
        .then((res) => {return res.json()})
        .then(data => {
            dataStands = data
            req.dataStands = data
            next()})
        .catch(err => {console.log(err)})
    }else{
        req.dataStands = dataStands
        next()
    }
}


// home route
app.get('/', (req,res) =>{
    res.render("home", {title:"home", layout:"layouts/main-layouts"})
})

// char route
app.get("/char", fetchChar,(req,res)=>{
    res.render("character", {title:"Char page", datas : req.dataChars, layout:"layouts/main-layouts"})
})

// char id route
app.get("/char/:id", fetchChar,(req,res)=>{
    charId = req.params.id
    char = req.dataChars.find(data => data.id === req.params.id)
    res.render("charProfile",{title:`Character ${charId}`, char, layout:"layouts/main-layouts"})
})

// stands route
app.get("/stands",fetchStands,(req,res)=>{
    res.render("stands", {title:"Stands Page", datas:req.dataStands, layout:"layouts/main-layouts"})
})

// stands id route

app.listen(3000,()=>{
    console.log("Server Running.....")
})