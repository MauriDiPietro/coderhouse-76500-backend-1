import { userManager } from "../managers/user-manager.js";

class UserController {
  constructor(manager) {
    this.manager = manager;
  }

  getAll = async (req, res, next) => {
    try {
      const users = await this.manager.getAll();
      res.json(users);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await this.manager.getById(id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json(user);
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const userData = req.body;
      const newUser = await this.manager.create(userData);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const userData = req.body;
      const updatedUser = await this.manager.update(id, userData);
      if (!updatedUser)
        return res.status(404).json({ message: "User not found" });
      res.json(updatedUser);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedUser = await this.manager.delete(id);
      if (!deletedUser)
        return res.status(404).json({ message: "User not found" });
      res.json({ message: "User deleted", user: deletedUser });
    } catch (error) {
      next(error);
    }
  };
}


export const userController = new UserController(userManager);