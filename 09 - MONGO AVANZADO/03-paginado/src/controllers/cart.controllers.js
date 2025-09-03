import * as service from '../services/cart.services.js'

export const getAll = async (req, res, next) => {
    try {
      const response = await service.getAll();
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
  
  export const getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await service.getById(id);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
  
  export const create = async (req, res, next) => {
    try {
      const newCart = await service.create();
      res.status(200).json(newCart);
    } catch (error) {
      next(error);
    }
  };
  
  export const update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const cartUpd = await service.update(id, req.body);
     res.status(200).json(cartUpd);
    } catch (error) {
      next(error);
    }
  };
  
  export const remove = async (req, res, next) => {
    try {
      const { id } = req.params;
      const cartDel = await service.remove(id);
      res.status(200).json({ msg: `Cart id: ${cartDel._id} deleted` });
    } catch (error) {
      next(error.message);
    }
  };

export const addProdToCart = async (req, res, next) => {
    try {
      const { idCart } = req.params;
      const { idProd } = req.params;
      const newProdToUserCart = await service.addProdToCart(
        idCart,
        idProd,
      );
      res.json(newProdToUserCart);
    } catch (error) {
      next(error);
    }
  };

  export const removeProdToCart = async (req, res, next) => {
    try {
      const { idCart } = req.params;
      const { idProd } = req.params;
      const delProdToUserCart = await service.removeProdToCart(
        idCart,
        idProd,
      );
      res.json({msg: `product ${delProdToUserCart._id} deleted to cart`});
    } catch (error) {
      next(error);
    }
  };

  export const updateProdQuantityToCart = async (req, res, next) => {
    try {
      const { idCart } = req.params;
      const { idProd } = req.params;
      const { quantity } = req.body;
      const  updateProdQuantity = await service.updateProdQuantityToCart(
        idCart,
        idProd,
        quantity
      );
      res.json(updateProdQuantity);
    } catch (error) {
      next(error);
    }
  };

  export const clearCart = async (req, res, next) => {
    try {
      const { idCart } = req.params;
      const clearCart = await service.clearCart(
        idCart,
      );
     res.json(clearCart);
    } catch (error) {
      next(error);
    }
  };

  
  