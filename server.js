const express = require("express")
const server = express()
server.use(express.json())
const port = 3456;
const host = `http://localhost:${port}`

server.use('/', express.static('www'))

// start
server.listen(port, () => {
  console.log(host)
  console.log('server running on port ' + port)
})

const list = [
    {nr:1},
    {nr:2}
]

server.get("/examples", async (req, res) => {
  res.json(list)
})

server.post("/examples", async (req, res) => {
    list.push(req.body)
    res.json({listLength: list.length})
})

server.put("/examples/:nr", async (req, res) => {
    for(let i=0;i<list.length;i++){
        if(list[i].nr == req.params.nr){
            list[i] = req.body
            break;
        }
    }
    res.json(list)
})

server.delete("/examples/:nr", async (req, res) => {
    for(let i=0;i<list.length;i++){
        if(list[i].nr == req.params.nr){
            list.splice(i,1)
        }
    }
    res.json({listLength: list.length})
})

setTimeout(process.exit, 15000)