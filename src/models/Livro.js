import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: {type:String,require: true},
    author: {type:String,require: true},
    editor: {type:String,require: true},
    pages: {type:Number,require: true}
},{versionKey:false})


const livro = mongoose.model("Livros", livroSchema)

export default livro