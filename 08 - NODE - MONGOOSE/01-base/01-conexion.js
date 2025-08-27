import "dotenv/config";
import { connect } from "mongoose";

export const initMongoDB = async () => {
  try {
    await connect(process.env.MONGO_LOCAL_URL);
    // await connect(process.env.MONGO_ATLAS_URL);
  } catch (error) {
    throw new Error(`Error connecting to MongoDB: ${error}`);
  }
};

initMongoDB()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
