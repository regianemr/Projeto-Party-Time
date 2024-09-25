const express = require("express")
const cors = require("cors")
const app = express()

// permitir requisição com domínio
app.use(cors())

// permitir a conexão de dados via json
app.use(express.json())

// DB Connection 
const conn = require("./db/conn")

conn();

//  Routes

const routes = require("./routes/router")
app.use("/api", routes)

app.listen(3001, function() {
    console.log("Servidor Online!")
})