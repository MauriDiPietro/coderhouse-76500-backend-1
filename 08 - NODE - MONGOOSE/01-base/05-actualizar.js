import { initMongoDB } from "./01-conexion.js";
import { UserModel } from "./02-schema.js";

initMongoDB()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const actualizar = async () => {
    const c4 = await UserModel.findByIdAndUpdate(
      "68ae40ae16003df7764dae65",
      { first_name: "Carlos" },
      { new: true }
    );
    console.log(c4);

//   const c5 = await UserModel.updateOne(
//     { _id: "68ae40ae16003df7764dae65" },
//     { $set: { first_name: "Ernesto" } }
//   );
//   console.log(c5);
};

actualizar();
