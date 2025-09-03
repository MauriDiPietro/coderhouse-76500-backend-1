import { UserModel } from "./models/user.model.js";

class UserDaoMongoDB {
  constructor(model){
    this.model = model;
  }


  async getByEmail(email) {
    try {
      return await this.model.findOne({ email: email });
    } catch (error) {
      throw new Error(error);
    }
  }

  async getById(id) {
    try {
      return await this.model.findById(id).populate("cart");
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAll(page = 1, limit = 10) {
    try {
      return await this.model.paginate({}, { page, limit });
    } catch (error) {
      throw new Error(error);
    }
  }

  async register(obj) {
    try {
      return await this.model.create(obj);
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, obj) {
    try {
      return await this.model.findByIdAndUpdate(id, obj, {new:true});
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      return await this.model.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const userDao = new UserDaoMongoDB(UserModel)
