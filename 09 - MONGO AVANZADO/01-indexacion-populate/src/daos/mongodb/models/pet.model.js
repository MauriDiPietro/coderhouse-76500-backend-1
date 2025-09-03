import mongoose from "mongoose";

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  breed: {
    type: String,
    required: true,
  }
});

export const PetModel = mongoose.model("pets", PetSchema);
