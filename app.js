// carregando módulos
    const express = require('express')
    const {engine} = require('express-handlebars')
    const bodyParser = require("body-parser")
    const app = express()
    const admin = require("./routes/admin")
    //const mongoose = require("mongoose")
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
        // em breve

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