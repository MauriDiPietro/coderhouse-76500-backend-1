import { petDao } from "../daos/mongodb/pet.dao.js";

class PetRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getByIdPet = async (id) => {
    try {
      return await this.dao.getPetById(id);
    } catch (error) {
      throw new Error(error);
    }
  };

  createPet = async (obj) => {
    try {
      return await this.dao.createPet(obj);
    } catch (error) {
      throw new Error(error);
    }
  };

  updatePet = async (id, obj) => {
    try {
      return await this.dao.updatePet(id, obj);
    } catch (error) {
      throw new Error(error);
    }
  };

  deletePet = async (id) => {
    try {
      return await this.dao.deletePet(id);
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const petRepository = new PetRepository(petDao);
