import fs from "fs";
import crypto from "crypto";

class UserManager {
  constructor(path) {
    this.path = path;
  }

  async getUsers() {
    if (fs.existsSync(this.path)) {
      const users = await fs.promises.readFile(this.path, "utf-8");
      return JSON.parse(users);
    }
    return [];
  }

  async getUserById(id) {
    try {
      const users = await this.getUsers();
      const user = users.find((user) => user.id === id);
      if (!user) throw new Error("User not found");
      return user;
    } catch (error) {
      throw error;
    }
  }

  async register(obj) {
    const user = { ...obj };
    const users = await this.getUsers();
    user.secret = crypto.randomBytes(128).toString();
    user.password = crypto
      .createHmac("sha256", user.secret)
      .update(user.password)
      .digest("hex");
    users.push(user);
    await fs.promises.writeFile(this.path, JSON.stringify(users));
    return { user: user.username };
  }

  async login(username, password) {
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
  }
}

export const userManager = new UserManager("./src/data/users.json");
