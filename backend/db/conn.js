const mongoose = require("mongoose")

async function main() {

    try {


        await mongoose.connect("mongodb+srv://regianedev:AE5YznEW3DbGNYcn@cluster0.fbcft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

        console.log("Conectado ao banco!")

    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main;
