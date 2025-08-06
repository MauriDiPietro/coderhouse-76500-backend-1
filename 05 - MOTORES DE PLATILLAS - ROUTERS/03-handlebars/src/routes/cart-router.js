import { Router } from "express";
const router = Router();

router.post("/", (req, res) => {
  // crear un carrito (cart.json)
  /*
  {
    id: 1,
    products: []
  }
  */
  //id: Number/String (Autogenerado para asegurar que nunca se dupliquen los ids).
  // products: Array que contendrá objetos que representen cada producto.
});

router.get("/:cid", (req, res) => {
    //Debe listar los productos que pertenecen al carrito con el cid proporcionado.
});

router.post("/:cid/product/:pid", (req, res) => {
    const { cid } = req.params;
    const { pid } = req.params;
    // await cartManager.saveProdToCart(cid, pid);
    /*
    - extraer el cid y pid de los parámetros de la ruta.
    - llamar al metodo del cartManager que busca cart por id
    - llamar al metodo del productManager que busca el producto por id
    - llamar al metodo que guarda el prod en el carrito
    - el metodo que guarda el prod en el carrito debe verificar si el producto ya existe en el carrito,
     si existe, incrementar la cantidad del producto, si no existe, agregarlo al carrito.
    */
});

export default router;
