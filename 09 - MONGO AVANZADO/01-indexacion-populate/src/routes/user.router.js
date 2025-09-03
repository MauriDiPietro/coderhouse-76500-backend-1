import { Router } from "express";
import { userController } from "../controllers/user.controller.js";

const router = Router();

router.get("/all", userController.getAllCtr);

router.post("/file", userController.createFileCtr);

router.get("/", userController.getByNameCtr);

router.get("/id/:id", userController.getByIdCtr);

router.get("/email/:email", userController.getByEmailCtr);

router.post("/add/:idUser/pet/:idPet", userController.addPetToUser);

router.post("/", userController.createCtr);

router.put("/:id", userController.updateCtr);

router.delete("/:id", userController.deleteCtr);

export default router;
