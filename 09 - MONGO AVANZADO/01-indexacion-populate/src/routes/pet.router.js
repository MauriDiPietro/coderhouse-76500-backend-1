import { Router } from "express";
import { petController } from "../controllers/pet.controller.js";

const router = Router();

router.post("/", petController.createPet);

router.get("/:id", petController.getByIdPet);

export default router;
