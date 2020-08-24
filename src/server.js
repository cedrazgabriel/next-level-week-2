
//servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')


//Configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})
//inicio e config do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended: true}))
//Configurar arquivos estaticos (css,scripts,images)
.use(express.static("public"))
// rotas da aplicacao
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes",saveClasses)
.listen(5500)



