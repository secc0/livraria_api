import mongoose from "mongoose"
import "dotenv/config"


async function dataBaseConect(){
    mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@livraria.y333buj.mongodb.net/?retryWrites=true&w=majority&appName=livraria`)
    return mongoose.connection
}

export default dataBaseConect