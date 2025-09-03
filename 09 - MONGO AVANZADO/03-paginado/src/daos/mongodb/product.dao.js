import { ProductModel } from "./models/product.model.js";

export default class ProductDaoMongoDB {
  constructor(model){
    this.model = model
  }
  
  async getAll(page = 1, limit = 10, name, sort) {
    try {
      const filter = name ? { 'name': name } : {};
    
      let sortOrder = {};

      if (sort) sortOrder.price = sort === 'asc' ? 1 : sort === 'desc' ? -1 : null; 

      return await this.model.paginate(filter, {page, limit, sort: sortOrder});

    } catch (error) {
      throw new Error(error);
    }
  }
  

  async getById(id) {
    try {
      return await this.model.findById(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(obj) {
    try {
      return await this.model.create(obj);
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, obj) {
    try {
      return await this.model.findByIdAndUpdate(id, obj, {
        new: true,
      });
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

export const prodDao = new ProductDaoMongoDB(ProductModel)
