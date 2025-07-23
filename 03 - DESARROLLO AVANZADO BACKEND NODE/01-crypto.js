const crypto = require("crypto");

class UserManager {
  constructor() {
    this.users = [];
  }

  getUsers() {
    return this.users;
  }

  register(obj) {
    const user = { ...obj };
    user.secret = crypto.randomBytes(128).toString();
    user.password = crypto
      .createHmac("sha256", user.secret)
      .update(user.password)
      .digest("hex");
    this.users.push(user);
    return {user: user.username};
  }


  login(username, password){
    const users = this.getUsers();
    const user = users.find((user) => user.username === username);
    if (!user) return "Usuario no encontrado";
    const nuevaCrypto = crypto.createHmac('sha256', user.secret).update(password).digest('hex');
    if(user.password !== nuevaCrypto) {
      return "Contraseña incorrecta";
    }
    return {
      username: user.username,
      message: "Login exitoso"
    };
  }

}

const user1 = { username: "Juan", password: "1234" }

const userManager = new UserManager();

console.log(userManager.register(user1));
console.log(userManager.login("Juan", "1234"));

