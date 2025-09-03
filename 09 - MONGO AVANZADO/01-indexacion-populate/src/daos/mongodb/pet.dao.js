import { PetModel } from "./models/pet.model.js";

export default class PetDaoMongoDB {
  constructor(model) {
    this.model = model;
  }
  getPetById = async (id) => {
    try {
      return await this.model.findById(id);
    } catch (error) {
      throw error;
    }
  };

  getAllPets = async () => {
    try {
      return await this.model.find({});
    } catch (error) {
      throw error;
    }
  };

  createPet = async (obj) => {
    try {
      return await this.model.create(obj);
    } catch (error) {
      throw error;
    }
  };

  updatePet = async (id, obj) => {
    try {
      return await this.model.findByIdAndUpdate(id, obj, { new: true });
    } catch (error) {
      throw error;
    }
  };

  deletePet = async (id) => {
    try {
      return await this.model.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  };
}

export const petDao = new PetDaoMongoDB(PetModel);
