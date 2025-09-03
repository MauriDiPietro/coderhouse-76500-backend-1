import { petRepository } from "../repositories/pet.repository.js";

class PetController {
  constructor(repository) {
    this.repository = repository;
  }

  getByIdPet = async (req, res, next) => {
    try {
      const { id } = req.params;
      const item = await this.repository.getByIdPet(id);
      if (!item) return res.status(404).json({ msg: "Pet not found!" });
      return res.json(item);
    } catch (error) {
      next(error);
    }
  };

  createPet = async (req, res, next) => {
    try {
      const pet = { ...req.body };
      const newUser = await this.repository.createPet(pet);
      if (!newUser) return res.status(404).json({ msg: "error create Pet!" });
      return res.json(newUser);
    } catch (error) {
      next(error);
    }
  };
}

export const petController = new PetController(petRepository);
