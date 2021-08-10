// const http = require('http')
//
// const port = 5000
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/html')
//   res.end('<h1>Hello, World!</h1>')
// })
//
// server.listen(port, () => {
//   console.log(`Server running at port ${port}`)
// })

const express =require('express');
const app = express();

const port = 3000;




app.listen(port,()=>console.log(`My fullstack app is listening on port ${port}`))
