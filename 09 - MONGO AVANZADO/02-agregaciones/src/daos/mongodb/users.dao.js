import { UserModel } from "./models/user.model.js";

export default class UserDaoMongoDB {
  async getUserByName(name) {
    try {
      const response = await UserModel.find({ first_name: name }).explain();
      return response.executionStats;
    } catch (error) {
      throw error;
    }
  }

  async getUserById(id) {
    try {
      const response = await UserModel.findById(id).explain();
      return response.executionStats;
    } catch (error) {
      throw error;
    }
  }

  async getUserByEmail(email) {
    try {
      const response = await UserModel.find({ email: email }).explain();
      return response.executionStats;
    } catch (error) {
      throw error;
    }
  }

  async addPetToUser(userId, petId) {
    try {
      const user = await UserModel.findByIdAndUpdate(
        userId,
        { $push: { pets: petId } },
        { new: true }
      );
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllUsers() {
    try {
      return await UserModel.find({});
    } catch (error) {
      throw error;
    }
  }

  async createUser(obj) {
    try {
      const response = await UserModel.create(obj);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id, obj) {
    try {
      await UserModel.updateOne({ _id: id }, obj);
      return obj;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      const response = await UserModel.findByIdAndDelete(id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async aggregation1(gender) {
    try {
      const response = await UserModel.aggregate([
        {
          $match: {
            gender: `${gender}`,
            // age: { $gte: 30 },
          },
        },
      ]);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateManyAge() {
    try {
      const users = await UserModel.find({});
      const updatePromises = users.map((user) => {
        return UserModel.findByIdAndUpdate(user._id, {
          $set: { age: getRandomNumber() },
        });
      });

      await Promise.all(updatePromises);

      return { message: "updated ok" };
    } catch (error) {
      throw new Error(error);
    }
  }

  async aggregation2(age) {
    try {
      const response = await UserModel.aggregate([
        {
          $match: {
            age: { $gte: age },
          },
        },
        {
          $group: {
            _id: "$gender",
            average_age: { $avg: "$age" },
            count: { $sum: 1 },
            youngest: { $min: "$age" },
            oldest: { $max: "$age" },
          },
        },
        {
          $sort: {
            average_age: 1,
          },
        },
      ]);
      return response;
      /*
      _id: Female,
      average_age: 33,
      count: 456,
      youngest: 18
      oldest: 90
      */
    } catch (error) {
      throw new Error(error);
    }
  }
}
