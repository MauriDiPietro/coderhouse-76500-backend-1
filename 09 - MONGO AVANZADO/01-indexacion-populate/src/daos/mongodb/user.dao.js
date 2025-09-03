import { UserModel } from "./models/user.model.js";

export default class UserDaoMongoDB {
  constructor(model) {
    this.model = model;
  }

  getUserByName = async (name) => {
    try {
      return await this.model.find({ first_name: name }).explain('executionStats');
    } catch (error) {
      throw error;
    }
  };

  getUserById = async (id) => {
    try {
      // return await this.model.findById(id).explain('executionStats');
      return await this.model.findById(id).populate("pets");  //--> nombre de la propiedad
    } catch (error) {
      throw error;
    }
  };

  getUserByEmail = async (email) => {
    try {
      const response = await this.model.find({ email: email }).explain();
      return response.executionStats;
    } catch (error) {
      throw error;
    }
  };

  addPetToUser = async (userId, petId) => {
    try {
      const user = await this.model.findByIdAndUpdate(
        userId,
        { $push: { pets: petId } },
        { new: true }
      );
      return user;
    } catch (error) {
      throw new Error(error);
    }
  };

  getAllUsers = async () => {
    try {
      // return await this.model.find({}).explain('executionStats');
      return await this.model.find({})
    } catch (error) {
      throw error;
    }
  };

  createUser = async (obj) => {
    try {
      const response = await this.model.create(obj);
      return response;
    } catch (error) {
      throw error;
    }
  };

  updateUser = async (id, obj) => {
    try {
      await this.model.updateOne({ _id: id }, obj);
      return obj;
    } catch (error) {
      throw error;
    }
  };

  deleteUser = async (id) => {
    try {
      const response = await this.model.findByIdAndDelete(id);
      return response;
    } catch (error) {
      throw error;
    }
  };
}

export const userDao = new UserDaoMongoDB(UserModel);