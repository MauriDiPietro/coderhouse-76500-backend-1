import fs from "fs";
import { __dirname } from "../utils.js";
import { userDao } from "../daos/mongodb/user.dao.js";
import { petRepository } from "./pet.repository.js";

class UserRepository {
  constructor(dao) {
    this.dao = dao;
  }

  createFileUser = async () => {
    try {
      const usersFile = JSON.parse(
        fs.readFileSync(`${__dirname}/data/Users.json`, "utf-8")
      );
      const newUsers = await this.dao.createUser(usersFile);
      console.log("¡Users saved successfully!");
      if (!newUsers) throw new Error("Cannot save users");
      return newUsers.length;
    } catch (error) {
      throw error;
    }
  };

  getByNameUser = async (name) => {
    try {
      const user = await this.dao.getUserByName(name);
      if (!user) throw new Error("User not found!");
      return user;
    } catch (error) {
      throw error;
    }
  };

  getByIdUser = async (id) => {
    try {
      const item = await this.dao.getUserById(id);
      if (!item) throw new Error("User not found!");
      return item;
    } catch (error) {
      throw error;
    }
  };

  getByEmailUser = async (email) => {
    try {
      const item = await this.dao.getUserByEmail(email);
      if (!item) throw new Error("User not found!");
      return item;
    } catch (error) {
      throw error;
    }
  };

  getAllUsers = async () => {
    try {
      return await this.dao.getAllUsers();
    } catch (error) {
      throw error;
    }
  };

  addPetToUser = async (userId, petId) => {
    try {
      const exists = await petRepository.getByIdPet(petId);
      if (!exists) throw new Error("Pet not found!");
      return await this.dao.addPetToUser(userId, petId);
    } catch (error) {
      throw error;
    }
  };

  createUser = async (obj) => {
    try {
      const newUser = await this.dao.createUser(obj);
      if (!newUser) throw new Error("Validation Error!");
      return newUser;
    } catch (error) {
      throw error;
    }
  };

  updateUser = async (id, obj) => {
    try {
      let item = await this.dao.getUserById(id);
      if (!item) throw new Error("User not found!");
      return await this.dao.updateUser(id, obj);
    } catch (error) {
      throw error;
    }
  };

  deleteUser = async (id) => {
    try {
      return await this.dao.deleteUser(id);
    } catch (error) {
      throw error;
    }
  };
}

export const userRepository = new UserRepository(userDao);