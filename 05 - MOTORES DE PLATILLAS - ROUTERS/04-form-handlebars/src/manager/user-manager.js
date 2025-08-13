import fs from "fs";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";

class UserManager {
  constructor(path) {
    this.path = path;
  }

  getUsers = async () => {
    if (fs.existsSync(this.path)) {
      const users = await fs.promises.readFile(this.path, "utf-8");
      return JSON.parse(users);
    }
    return [];
  };

  getUserById = async (id) => {
    try {
      const users = await this.getUsers();
      const user = users.find((user) => user.id === id);
      if (!user) throw new Error("User not found");
      return user;
    } catch (error) {
      throw error;
    }
  };

  register = async (obj) => {
    const user = { ...obj, id: uuidv4() };
    const users = await this.getUsers();
    user.secret = crypto.randomBytes(128).toString();
    user.password = crypto
      .createHmac("sha256", user.secret)
      .update(user.password)
      .digest("hex");
    users.push(user);
    await fs.promises.writeFile(this.path, JSON.stringify(users));
    return user
  };

  login = async (username, password) => {
    const users = await this.getUsers();
    const user = users.find((user) => user.username === username);
    if (!user) return "Usuario no encontrado";
    const nuevaCrypto = crypto
      .createHmac("sha256", user.secret)
      .update(password)
      .digest("hex");
    if (user.password !== nuevaCrypto) {
      return "Contraseña incorrecta";
    }
    return {
      username: user.username,
      message: "Login exitoso",
    };
  };

  update = async (obj, id) => {
    try {
      const users = await this.getUsers();
      let userExist = await this.getUserById(id);
      userExist = { ...userExist, ...obj };
      const newArray = users.filter((u) => u.id !== id);
      newArray.push(userExist);
      await fs.promises.writeFile(this.path, JSON.stringify(newArray));
      return userExist;
    } catch (error) {
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const users = await this.getUsers();
      if (users.length > 0) {
        const user = await this.getUserById(id);
        const newArray = users.filter((u) => u.id !== id);
        await fs.promises.writeFile(this.path, JSON.stringify(newArray));
        return user;
      }
    } catch (error) {
      throw error;
    }
  };
}

export const userManager = new UserManager("./src/data/users.json");
