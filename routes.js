import {randomUUID} from 'node:crypto'
import { Database } from "./database"
import { buildRoutePath } from './utils/build'
const database = new Database()

export const routes = [
    {
        method:'GET',
        path: buildRoutePath('/users'),
        handler:(req, res) => {
            const {search} = req.query


            const users = database.select('users', search ?{
                nome: search,
                email: search,
            } : null)

        return res.end(JSON.stringify(users))
        }
    },
    {

        method:'POST',
        path: buildRoutePath('/users'),
        handler:(req, res) => {
        const {nome, email} = req.body

        const user = { 
            id: randomUUID(),
            nome,
            email,
        }

        database.insert('users', user)

        return res.writeHead(201).end()
       }
    },
     {

        method:'PUT',
        path: buildRoutePath('/users'),
        handler:(req, res) => {
        const { id } = req.parms
        const { name, email} = req.body

        database.delete('users', id, {
            nome,
            email,
        })

        return res.writeHead(204).end()
       },
    },
    {

        method:'POST',
        path: buildRoutePath('/users'),
        handler:(req, res) => {
        const {nome, email} = req.body

        const user = { 
            id: randomUUID(),
            nome,
            email,
        }

        database.insert('users', user)

        return res.writeHead(201).end()
       }
    }
]