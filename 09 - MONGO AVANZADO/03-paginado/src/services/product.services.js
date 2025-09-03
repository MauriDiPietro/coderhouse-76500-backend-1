import { prodDao } from '../daos/mongodb/product.dao.js'
import { CustomError } from "../utils.js";

export const getAll = async (page, limit, first_name, sort) => {
  try {
    return await prodDao.getAll(page, limit, first_name, sort);
  } catch (error) {
    throw new Error(error);
  }
};

export const getById = async (id) => {
  try {
    const prod = await prodDao.getById(id);
    if (!prod) throw new CustomError("Product not found", 404);
    return prod;
  } catch (error) {
    throw error;
  }
};

export const create = async (obj) => {
  try {
    const newProd = await prodDao.create(obj);
    if (!newProd) throw new CustomError("Error create Product", 404);
    return newProd;
  } catch (error) {
    throw error;
  }
};

export const update = async (id, obj) => {
  try {
    const prodUpd = await prodDao.update(id, obj);
    if (!prodUpd) throw new CustomError("Error update Product", 404);
    return prodUpd;
  } catch (error) {
    throw error;
  }
};

export const remove = async (id) => {
  try {
    const prodDel = await prodDao.delete(id);
    if (!prodDel) throw new CustomError("Error delete Product", 404);
    return prodDel;
  } catch (error) {
    throw error;
  }
};
