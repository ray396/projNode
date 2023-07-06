// carregando módulos
    const express = require('express');
    const {engine} = require('express-handlebars');
    const bodyParser = require("body-parser");
    const app = express();
    const admin = require("./routes/admin");
    const path = require("path");
    const mongoose = require("mongoose")
// configurações 
    // body parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    // handlebars
        app.engine('handlebars', engine({
            defaultLayout: 'main',
            runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
            },
        }));
        app.set('view engine', 'handlebars');
        app.set("views", "views");
    // mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://127.0.0.1/blogapp").then(() => {
            console.log("Conectado ao mongo")
        }).catch((err) => {
            console.log("Erro ao se conectar: "+err)
        })
    // public
        app.use(express.static(path.join(__dirname, "public")))

// rotas 
        app.get('/', (req, res) => {
            res.send('Rota principal')
        })
        app.use('/admin', admin)
// outros
const PORT = 8081
app.listen(PORT, () =>{
    console.log("servidor rodando!")
})