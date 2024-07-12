import livro from "../models/Livro.js";


class LivroController{
    static async getLivros(req, res) {
        const livros = await livro.find({})
        res.status(200).json(livros)
    }

    static async createLivros(req, res) {
        const body = req.body
        const novoLivro = await livro.create(body)
        res.status(201).json(novoLivro)
    }
    static async deleteLivros(req, res) {
        const id = req.params.id
        await livro.findByIdAndDelete(id)
        res.status(201).send("excluido")
    
    }

}
export default LivroController

