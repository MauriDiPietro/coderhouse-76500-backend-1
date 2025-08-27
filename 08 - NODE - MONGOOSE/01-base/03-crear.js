import { initMongoDB } from "./01-conexion.js";
import { UserModel } from "./02-schema.js";

const createUser = async (user) => {
  try {
    return await UserModel.create(user);
  } catch (error) {
    throw new Error(error);
  }
};

const newUser = {
  first_name: "Franco",
  last_name: "Florentin",
  email: "fran@mail.com",
  age: 30,
  password: "123456",
  // role: "user"
};

const test = async () => {
  try {
    initMongoDB()
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.log(err));

    await createUser(newUser);
    console.log("User created");
  } catch (error) {
    console.log(error);
  }
};

test();
