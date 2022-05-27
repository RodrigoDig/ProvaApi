import {semaforo, diaSemana} from './services.js'
import {Router} from 'express'

const server = Router();

server.get('/diaSemana', (req, resp)=>{
    
    let a = req.query.dia;
    let x = diaSemana(a);

    resp.send({
        dia: x
    })

})

server.get('/semaforo/:cor', (req, resp) =>{
    let a = (req.params.cor);
    let x = semaforo (a);

    resp.send({
        semaforo:x
    })
})

export default server;