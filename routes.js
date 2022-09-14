const { Router } = require('express')
const express = require('express')
const routes = express.Router()

let clientes = [
    { '1':
        {
        "nome": "Cauê",
        "sobrenome": "Dias",
        "email": "cauediasn@gmail.com",
        "senha": "caue2712"
        },

        '2':
        {
        "nome": "Cauê",
        "sobrenome": "Dias",
        "email": "cauediasn@gmail.com",
        "senha": "caue2712"
        }
}
    
]

// Buscar dados 
routes.get('/', (req,res)=>{
return res.json(clientes)
})

// inserir dados
routes.post('/addCliente', (req,res)=>{
const body = req.body

if(!body)
return res.status(400).end()

clientes.push(body)
return res.json(body)
})

routes.delete('/:id', (req, res)=>{
    const id = req.params.id

    let newClientes = clientes.filter(item =>{
        if(!item[id])
        return item
    })

    clientes = newClientes

    return res.send(newClientes)
})


module.exports = routes