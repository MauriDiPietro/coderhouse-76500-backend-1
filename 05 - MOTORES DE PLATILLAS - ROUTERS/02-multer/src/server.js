import express from "express";
import { errorHandler } from "./middlewares/error-handler.js";
import userRouter from "./routes/user-router.js";
import productRouter from "./routes/product-router.js";
import cartRouter from "./routes/cart-router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);

app.use(errorHandler);

app.listen(8080, () => console.log("Servidor escuchando en el puerto 8080"));
