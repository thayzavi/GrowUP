import http from 'node:http'
import { Transform } from 'node:stream'
import { buffer } from 'node:stream/consumers'


class InverseNumberTenStream extends Transform{
     _transform(chunk, encoding, callback){
         const transformed = Number(chunk.toString()) * -1

         console.log(transformed)
 
         callback(null, Buffer.from(String(transformed)))
     }
}
const server = http.createServer(async(req, res)=>{
    const Buffers = []

    for await (const chunk of req){
        Buffers.push(chunk)
    }
    const fullStreamContent = Buffer.concat(Buffers).toString()
    console.log(fullStreamContent)
    return res.end(fullStreamContent)
    // return req
    //     .pipe(new InverseNumberTenStream())
    //     .pipe(res)

})

server.listen(3334)
