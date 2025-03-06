import http from 'http';
import { json } from './middlewares/server';
import { routes } from './routes.js';
import { extractQueryParams } from './utils/extract.js';

const server = http.createServer(async(req, res) => {
    const {method, url} = req

    await json(req, res)

    const route = routes.find(route =>{
        return route.method === method && route.path.test(url)
    })

    if (route){
        const routeParams = req.url.match(route.path)

        // remoção
        const { query, ...params} = routeParams.groups

        req.params = params
        req.query = extractQueryParams(query)

        return route.handler(req, res)
    }

    return res.writeHead(404).end()
})

server.listen(3333)