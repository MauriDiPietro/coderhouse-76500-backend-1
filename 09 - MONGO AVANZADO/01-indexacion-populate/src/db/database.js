import mongoose from "mongoose";

const connectionString = "mongodb://127.0.0.1:27017/coderhouse";

export const initMongoDB = async () => {
  try {
    await mongoose.connect(connectionString);
  } catch (error) {
    throw new Error(error);
  }
};
