//netflix & spotify
//importação de client via csv(Exel
//1gb -- 1.000.000)
// POST /uploaud import.csv
// readable Streams / Writable Streams
//tring de escrica ele processa o dado
// process.stdin //string de entrata
//     .pipe(process.stdout) //string de saída


import { Readable, Writable, Transform } from "node:stream";

class OneToHundredStream extends Readable{
    index = 1

    _read(){
       const i = this.index++

       setTimeout(() =>{
        if (i >100){
            this.push(null)
        }else{
            const buf = Buffer.from(String(i))

            this.push(buf)
        }
       }, 1000)
    }
}

class MultiplyByTenStream extends Writable{
    _write(chunk, encoding, callback){
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

class InverseNumberTenStream extends Transform{
    _write(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(transformed)))
    }
}
new OneToHundredStream()
.pipe(new MultiplyByTenStream())
.pipe(new(InverseNumberTenStream))