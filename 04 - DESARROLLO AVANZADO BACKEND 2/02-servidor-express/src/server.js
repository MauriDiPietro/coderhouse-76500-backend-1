import express from "express";
import { userManager } from "./manager/user-manager.js";
import { errorHandler } from "./middlewares/error-handler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hola Mundo desde Express");
});

app.get("/users", async (req, res, next) => {
  try {
    const users = await userManager.getUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

app.get("/users/:id", async (req, res, next) => {
  try {
    // console.log(req.params.id)
    const { id } = req.params;
    const user = await userManager.getUserById(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

app.post("/users", async (req, res, next) => {
  try {
    // console.log(req.body);
    const user = await userManager.register(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

app.listen(8080, () => console.log("Servidor escuchando en el puerto 8080"));
