const express = require("express")
const bcrypt = require("bcryptjs")
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express()
const port = 500;

app.use(bodyParser.urlEcodede ({extended:true}))
app.use(bodyParser.json)

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"rukundojay-b123@",
    database:"hello"
})
connection.connect((err)=>{
    if(err){
        console.log("fail to create the connection")
    }else{
        console.log("connection established sucessfully")
    }
})

app.get("/users",(req,res)=>{
    const sql = "SELECT *FROM users"
    connection.query([sql],(err,result)=>{
        res.json(result)
    })
})
app.post("/users",(req,res)=>{
    const{username,email,password} = req.body
    const sql = "INSERT INTO users (username,email,password) VALUES(?,?,?)"
    connection.query([username,email,password],(err,result)=>{
        if(err){
            res.status(500).json({message:"fail to load data"})
        }else{
            res.status(200).json({message:"user registerd sucessfully"})
        }
    })

})

app.listen(port,(`app is listening to the port${port}`))

