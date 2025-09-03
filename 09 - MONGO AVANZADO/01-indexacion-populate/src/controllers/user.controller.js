import { userRepository } from "../repositories/user.repository.js";

class UserController {
  constructor(repository) {
    this.repository = repository;
  }

  createFileCtr = async (req, res, next) => {
    try {
      const newUsers = await this.repository.createFileUser();
      res.json({ message: `${newUsers} Insertados correctamente` });
    } catch (error) {
      next(error);
    }
  };

  getByNameCtr = async (req, res, next) => {
    try {
      const { name } = req.query;
      const item = await this.repository.getByNameUser(name);
      res.json(item);
    } catch (error) {
      next(error);
    }
  };

  getByIdCtr = async (req, res, next) => {
    try {
      const { id } = req.params;
      const item = await this.repository.getByIdUser(id);
      res.json(item);
    } catch (error) {
      next(error);
    }
  };

  getByEmailCtr = async (req, res, next) => {
    try {
      const { email } = req.params;
      const item = await this.repository.getByEmailUser(email);
      if (!item) throw new Error("User not found!");
      res.json(item);
    } catch (error) {
      next(error);
    }
  };

  getAllCtr = async (req, res, next) => {
    try {
      const items = await this.repository.getAllUsers();
      res.json(items);
    } catch (error) {
      next(error);
    }
  };

  addPetToUser = async (req, res, next) => {
    try {
      const { idUser } = req.params;
      const { idPet } = req.params;
      const newPet = await this.repository.addPetToUser(idUser, idPet);
      res.json(newPet);
    } catch (error) {
      next(error);
    }
  };

  createCtr = async (req, res, next) => {
    try {
      const user = { ...req.body };
      const newUser = await this.repository.createUser(user);
      if (!newUser) throw new Error("Validation Error!");
      else
        res.json({
          data: newUser,
        });
    } catch (error) {
      next(error);
    }
  };

  updateCtr = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, description, price, stock } = req.body;

      let item = await getByIdUser(id);

      if (!item) throw new Error("User not found!");

      const userUpdated = await this.repository.updateUser(id, {
        name,
        description,
        price,
        stock,
      });

      res.json({
        msg: "User updated",
        data: userUpdated,
      });
    } catch (error) {
      next(error);
    }
  };

  deleteCtr = async (req, res, next) => {
    try {
      const { id } = req.params;

      await this.repository.deleteUser(id);

      res.json({
        msg: "User deleted",
      });
    } catch (error) {
      next(error);
    }
  };
}

export const userController = new UserController(userRepository);
