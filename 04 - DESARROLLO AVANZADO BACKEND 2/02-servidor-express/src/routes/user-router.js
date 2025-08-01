import { Router } from "express";
import { userManager } from "../manager/user-manager.js";
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await userManager.getUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    // console.log(req.params.id)
    const { id } = req.params;
    const user = await userManager.getUserById(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    // console.log(req.body);
    const user = await userManager.register(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedUser = await userManager.update(req.body, id);
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await userManager.delete(id);
    res.json(deletedUser);
  } catch (error) {
    next(error);
  }
});

export default router;
