import livros from "../routes/livroRoutes.js"
import express from "express"

const routes = (app)=>{
    app.use(express.json(), livros)
}

export default routes