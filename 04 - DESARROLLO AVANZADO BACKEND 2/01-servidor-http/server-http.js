import { createServer } from "http";
import { products } from "./data/products.js";

const server = createServer((req, res) => {
  // console.log(req.url);
  if (req.url === "/products") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  }
  if (req.url === "/home") {
    res.end("Hola, bienvenido al servidor!");
  }
});

server.listen(8080, () => console.log("Server is running on port 8080"));
