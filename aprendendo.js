const mongoose = require("mongoose");

// configurando o mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://127.0.0.1/aprendendo").then(() => {
        console.log("Mongodb Conectado!")
    }).catch((err) => {
        console.log("Houve um erro ao se conectar ao mongoDB: "+err)
    })
// model - usuarios
// definindo o model
const UsuarioSchema = mongoose.Schema({

    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }

})
// collection
mongoose.model('usuarios', UsuarioSchema)

const Rayssa = mongoose.model('usuarios')

new Rayssa({
    nome: "Rayssa",
    sobrenome: "Dantas",
    email: "rayssadantas31@gmail.com",
    idade: 23,
    pais: "Brasil"
}).save().then(() => {
    console.log("Usuario criado com sucesso!")
}).catch((err) => {
    console.log("Houve um erro ao registrar o usuario: "+err)
})