const http = require("http");
const app = require("./app");
const socketIo = require("socket.io");
const config = require("./config/development");
const Blog = require("./src/Blog/BlogModel");

let interval;

app.set("port", config.port);

const server = http.createServer(app);
const io = socketIo(server);
server.on("listening", function () {
  console.log("ok, server is running at 7000");
});

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit =async (socket) => {

  // Emitting a new message. Will be consumed by the client
  socket.emit("Blog",await blogs());
};

const blogs = () =>{
 return   Blog.find({}).then((results) =>{
       
        return results;
    }).catch((err) =>{
        console.log("Error is : "+ err);
    })

}

server.listen(config.port);

