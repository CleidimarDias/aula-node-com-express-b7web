import express from 'express'
import helmet from 'helmet'
import path from 'path'



const server = express();

server.use(helmet()); //Adiciona cabeçalhos para segurança
server.use(express.json());
server.use(express.urlencoded({extended: true})) // Lida com dados de requisição
server.use(express.static(path.join(__dirname, '../public'))) // para ter acesso a arquivos estáticos


server.get('/', (req, res)=>{
    let name = "cleidimar";
    let age = 90
    res.json({name, age});
});

server.listen(3000, ()=>{
    console.log("server running at port link: http://localhost:3000/")
})