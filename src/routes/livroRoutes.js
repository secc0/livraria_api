import express from "express"
import LivroController from "../controllers/livroController.js"


const routes = express.Router()

routes.get("/livros", LivroController.getLivros)
routes.post("/livros", LivroController.createLivros)
routes.delete("/livros/:id", LivroController.deleteLivros)




export default routes