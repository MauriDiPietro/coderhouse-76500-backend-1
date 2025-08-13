import { Router } from "express";
import { userManager } from "../manager/user-manager.js";

const router = Router();

router.get("/vista1", (req, res) => {
  res.render("vista1");
});

router.get("/vista2", (req, res) => {
  res.render("vista2");
});

router.get("/vista3", (req, res) => {
  const user = {
    firstname: "John",
    lastname: "Doe",
  };
  res.render("vista3", user);
});

const users = [
  {
    firstname: "Juan",
    lastname: "Perez",
    age: 30,
    mail: "juan@mail.com",
    phone: "65458942",
  },
  {
    firstname: "Carlos",
    lastname: "Perez",
    age: 30,
    mail: "car@mail.com",
    phone: "6767676",
  },
  {
    firstname: "Juana",
    lastname: "Perez",
    age: 30,
    mail: "juani@mail.com",
    phone: "6577",
  },
  {
    firstname: "Ernestina",
    lastname: "Perez",
    age: 30,
    mail: "ernes@mail.com",
    phone: "43535",
  },
];
router.get("/lista-users", (req, res) => {
  res.render("users", { users });
});

router.get("/", (req, res) => {
  res.render("register");
});

router.get("/dashboard/:id", async (req, res) => {
  const { id } = req.params;
  const user = await userManager.getUserById(id);
  res.render("dashboard", { user });
});

export default router;
