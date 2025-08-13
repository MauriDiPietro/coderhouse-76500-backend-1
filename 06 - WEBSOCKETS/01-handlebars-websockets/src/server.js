import express from "express";
import { Server } from "socket.io";
import handlebars from "express-handlebars";

const app = express();

app.use(express.json());
app.use(express.static(`${process.cwd()}/src/public`));

app.engine("handlebars", handlebars.engine());
app.set("views", `${process.cwd()}/src/views`);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("websocket");
});

const httpServer = app.listen(8080, () => console.log("server ok"));

const socketServer = new Server(httpServer);

const products = []

socketServer.on("connection", (socket) => {
  console.log(`Usuario conectado ${socket.id}`);

  socket.on("disconnect", () => {
    console.log("usuario desconectado");
  });

  socket.emit('saludoDesdeBack', 'Bienvenido a websocket') // solo al que envio el msj
  //socket.broadcast.emit --> emite evento a todos menos al que envio el msj
  socket.on('respuestaDesdeFront', (message)=>{
    console.log(message);
  })

  socket.on('newProd', (prod)=>{
    products.push(prod)
    socketServer.emit('products', products) //emite a todos
  })
});
