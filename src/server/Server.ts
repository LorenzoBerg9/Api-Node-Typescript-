import express from "express";


const server = express();

interface Tests {

}

server.get('/', (req, res) => {
  return res.send('olá dev!');
})
export { server };
