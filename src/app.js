import express from "express"
import dataBaseConect from "./config/databaseConnect.js"

const app = express()
app.use(express.json())


const connect = await dataBaseConect()

connect.on("error", (err)=>{
    console.log("erro de conexão", err)
})

connect.once("open", ()=>{
    console.log("conexão feita com sucesso")
})








export default app

