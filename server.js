import http from 'http';
import { json } from './middlewares/server';

const users = []

const server = http.createServer(async(req, res) => {
    const {method, url} = req

    await json(req, res)

    if(method === 'GET' && url === '/users'){
        return res
        .setHeader('content-type', 'application/json')
        .end(JSON.stringify(users))
    }

    if(method === 'POST' && url === '/users'){
        const {nome, email} = req.body

        users.push({
            id:1,
            nome,
            email,
        })

        return res.writeHead(201).end()
    }
    return res.writeHead(204).end()
})

server.listen(3333)