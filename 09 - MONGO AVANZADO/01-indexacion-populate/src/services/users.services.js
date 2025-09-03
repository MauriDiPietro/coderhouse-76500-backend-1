import UserDaoMongoDB from "../daos/mongodb/user.dao.js";
const userDao = new UserDaoMongoDB();

import fs from "fs";
import { __dirname } from "../utils.js";

export const createFileUser = async () => {
  try {
    const usersFile = JSON.parse(
      fs.readFileSync(`${__dirname}/data/Users.json`, "utf-8")
    );
    const newUsers = await userDao.createUser(usersFile);
    console.log("¡Users saved successfully!");
    if (!newUsers) throw new Error("Cannot save users");
    return newUsers.length;
  } catch (error) {
    throw error;
  }
};

export const getByNameUser = async (name) => {
  try {
    const user = await userDao.getUserByName(name);
    if (!user) throw new Error("User not found!");
    return user;
  } catch (error) {
    throw error;
  }
};

export const getByIdUser = async (id) => {
  try {
    const item = await userDao.getUserById(id);
    if (!item) throw new Error("User not found!");
    return item;
  } catch (error) {
    throw error;
  }
};

export const getByEmailUser = async (email) => {
  try {
    const item = await userDao.getUserByEmail(email);
    if (!item) throw new Error("User not found!");
    return item;
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    return await userDao.getAllUsers();
  } catch (error) {
    throw error;
  }
};

export const addPetToUser = async (userId, petId) => {
  try {
    const exists = await petsDao.getPetById(petId);
    if (!exists) throw new Error("Pet not found!");
    return await userDao.addPetToUser(userId, petId);
  } catch (error) {
    throw error;
  }
};

export const createUser = async (obj) => {
  try {
    const newUser = await userDao.createUser(obj);
    if (!newUser) throw new Error("Validation Error!");
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, obj) => {
  try {
    let item = await userDao.getUserById(id);
    if (!item) throw new Error("User not found!");
    return await userDao.updateUser(id, obj);
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    return await userDao.deleteUser(id);
  } catch (error) {
    throw error;
  }
};
