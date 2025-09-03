import { userDao } from "../daos/mongodb/user.dao.js";
import { CustomError } from "../utils.js";
import { create as createCart } from "./cart.services.js";
import { createHash } from "../utils.js";

export const getAllUsers = async (page, limit) => {
  try {
    const users = await userDao.getAll(page, limit);
    if (!users) throw new CustomError("Users not found", 404);
    return users;
  } catch (error) {
    throw error;
  }
};

export const getByIdUser = async (id) => {
  try {
    const user = await userDao.getById(id);
    if (!user) throw new CustomError("User not found", 404);
    return user;
  } catch (error) {
    throw error;
  }
};

export const getByEmailUser = async (email) => {
  try {
    const user = await userDao.getByEmail(email);
    if (!user) throw new CustomError("User not found", 404);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (obj) => {
  try {
    const cartUser = await createCart();
    const newUser = await userDao.register({
      ...obj,
      password: createHash(obj),
      cart: cartUser._id,
    });
    // console.log(newUser)
    if (!newUser) throw new CustomError("Error register user", 404);
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, obj) => {
  try {
    const userUpd = await userDao.update(id, obj);
    if (!userUpd) throw new CustomError("Error update user", 404);
    return userUpd;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const userDel = await userDao.delete(id, obj);
    if (!userDel) throw new CustomError("Error delete user", 404);
    return userDel;
  } catch (error) {
    throw error;
  }
};
