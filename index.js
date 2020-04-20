const server = require('./app/server.js'); 

const PORT = process.env.PORT || 5000; 

server.listen(PORT, () => {
  console.log(`\n ** Listening on localhost:${PORT} ** \n`)
});