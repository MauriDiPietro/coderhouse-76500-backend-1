import { initMongoDB } from "./01-conexion.js"
import { UserModel } from "./02-schema.js";

initMongoDB().then(() => console.log("Connected to MongoDB")).catch((err) => console.log(err));

const consultar = async()=>{
    // const c1 = await UserModel.find();
    // console.log(c1);

    // const c2 = await UserModel.find({ age: { $gte: 30 } })
    // console.log(c2);
    
    // const c3 = await UserModel.findOne({ _id: '68ad1a4355a2d81cf9c1cfc7' })
    // console.log(c3);
    

    const c4 = await UserModel.findById('68ad1a4355a2d81cf9c1cfc7')
    console.log(c4);
}

consultar();