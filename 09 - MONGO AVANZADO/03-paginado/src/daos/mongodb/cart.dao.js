import { CartModel } from "./models/cart.model.js";

export default class CartDaoMongoDB {
  constructor(model){
    this.model = model
  }
  async create() {
    try {
      return await this.model.create({
        products: [],
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      return await this.model.find({});
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      return await this.model.findById(id).populate("products.product");  
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      return await this.model.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
    }
  }


  async addProdToCart(cartId, prodId) {
    try {
      const existProdInCart = await this.existProdInCart(cartId, prodId);
      if(existProdInCart){
        return await this.model.findOneAndUpdate(
          { _id: cartId, 'products.product': prodId },
          { $set: { 'products.$.quantity': existProdInCart.products[0].quantity + 1 } },
          { new: true }
        );
      } else {
        return await this.model.findByIdAndUpdate(
          cartId,
          { $push: { products: { product: prodId } } },
          { new: true }
        )
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  
  

  async existProdInCart(cartId, prodId){
    try {
      return await this.model.findOne({
        _id: cartId,
        products: { $elemMatch: { product: prodId } }
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async removeProdToCart(cart, prod) {
    try {
      // cart.products = cart.products.filter(
      //   (p) => p.product._id.toString() !== prod.product._id.toString()
      // );
      // cart.save();
      // return cart;

       // Utilizar el método findOneAndUpdate para aplicar el operador $pull
    return await this.model.findOneAndUpdate(
      { _id: cart },
      { $pull: { products: { product: prod } } },
      { new: true }
    );
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, obj) {
    try {
      const response = await this.model.findByIdAndUpdate(id, obj, {
        new: true,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async updateProdQuantityToCart(cartId, prodId, quantity) {
    try {
      // prod.quantity = quantity;
      // cart.save();
      // return prod;

      const updatedCart = await this.model.findOneAndUpdate(
        { _id: cartId, 'products.product': prodId },
        { $set: { 'products.$.quantity': quantity } },
        { new: true }
      );
  
      return updatedCart;
    } catch (error) {
      console.log(error);
    }
  }

  async clearCart(cartId) {
    try {
      // cart.products = [];
      // cart.save();
      // return cart;

      const updatedCart = await this.model.findOneAndUpdate(
        { _id: cartId },
        { $set: { products: [] } },
        { new: true }
      );
  
      return updatedCart;
    } catch (error) {
      console.log(error);
    }
  }
}


export const cartDao = new CartDaoMongoDB(CartModel);