import { cartDao } from "../daos/mongodb/cart.dao.js";

import { CustomError } from "../utils.js";
import { getById as getProductById } from "./product.services.js";

export const getAll = async () => {
  try {
    return await cartDao.getAll();
  } catch (error) {
    throw new Error(error);
  }
};

export const getById = async (id) => {
  try {
    const cart = await cartDao.getById(id);
    if (!cart) throw new CustomError("Cart not found", 404);
    return cart;
  } catch (error) {
    throw error;
  }
};

export const create = async () => {
  try {
    return await cartDao.create();
  } catch (error) {
    throw new Error(error);
  }
};

export const update = async (id, obj) => {
  try {
    const cartUpd = await cartDao.update(id, obj);
    if (!cartUpd) throw new CustomError("error update cart", 404);
    return cartUpd;
  } catch (error) {
    throw error;
  }
};

export const remove = async (id) => {
  try {
    const cartDel = await cartDao.delete(id);
    if (!cartDel) throw new CustomError("error delete cart", 404);
    return cartDel;
  } catch (error) {
    throw error;
  }
};

export const addProdToCart = async (cartId, prodId) => {
  try {
    const existCart = await getById(cartId);
    const existProd = await getProductById(prodId);

    return await cartDao.addProdToCart(existCart._id, existProd._id);
  } catch (error) {
    throw error;
  }
};

const existProdInCart = async (cartId, prodId) => {
  try {
    const exist = await cartDao.existProdInCart(cartId, prodId);
    if (!exist) throw new Error("Product not exist in cart");
    return exist;
  } catch (error) {
    throw error;
  }
};

export const removeProdToCart = async (cartId, prodId) => {
  try {
    const existCart = await getById(cartId);
    // console.log("existCart-->", existCart);
    const existProdInC = await existProdInCart(cartId, prodId);
    // console.log("existProd-->", existProdInC);
    return await cartDao.removeProdToCart(existCart._id, existProdInC._id);
  } catch (error) {
    throw error;
  }
};

export const updateProdQuantityToCart = async (cartId, prodId, quantity) => {
  try {
    const existCart = await getById(cartId);
    // console.log("existCart-->", existCart);
    const existProd = await getProductById(prodId);
    const existProdInC = await existProdInCart(existCart._id, existProd._id);
    // console.log("existProd-->", existProdInCart);
    return await cartDao.updateProdQuantityToCart(
      existCart._id,
      existProdInC._id,
      quantity
    );
  } catch (error) {
    throw error;
  }
};

export const clearCart = async (cartId) => {
  try {
    const existCart = await getById(cartId);
    console.log("existCart-->", existCart);
    return await cartDao.clearCart(cartId);
  } catch (error) {
    throw error;
  }
};
