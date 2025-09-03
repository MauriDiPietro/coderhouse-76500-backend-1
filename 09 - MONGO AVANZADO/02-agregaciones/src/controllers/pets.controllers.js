import * as service from "../services/pets.services.js";

export const getByIdPet = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await service.getByIdPet(id);
    if (!item) return res.status(404).json({ msg: "Pet not found!" });
    return res.json(item);
  } catch (error) {
    next(error);
  }
};

export const createPet = async (req, res, next) => {
  try {
    const pet = { ...req.body };
    const newUser = await service.createPet(pet);
    if (!newUser) return res.status(404).json({ msg: "error create Pet!" });
    return res.json(newUser);
  } catch (error) {
    next(error);
  }
};
