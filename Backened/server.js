const http=require("http")
const app=require("./app")
const server=http.createServer(app)
const { initializeSocket } = require('./socket');
const port=process.env.PORT||5000;
initializeSocket(server);

server.listen(port,'0.0.0.0',()=>{
    console.log(`Server is running at ${port}`)
})




