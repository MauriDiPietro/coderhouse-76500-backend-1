import * as service from "../services/product.services.js";

export const getAll = async (req, res, next) => {
  try {
    const { page, limit, first_name, sort } = req.query;
    const response = await service.getAll(page, limit, first_name, sort);
    const nextPage = response.hasNextPage
      ? `http://localhost:8080/products?page=${response.nextPage}`
      : null;
    const prevPage = response.hasPrevPage
      ? `http://localhost:8080/products?page=${response.prevPage}`
      : null;
    res.json({
      payload: response.docs,
      info: {
        count: response.totalDocs,
        totalPages: response.totalPages,
        nextLink: nextPage,
        prevLink: prevPage,
        hasPrevPage: response.hasPrevPage,
        hasNextPage: response.hasNextPage,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await service.getById(id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const newProd = await service.create(req.body);
    res.status(200).json(newProd);
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prodUpd = await service.update(id, req.body);
    res.status(200).json(prodUpd);
  } catch (error) {
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prodDel = await service.remove(id);
    res.status(200).json({ msg: `Product id: ${prodDel._id} deleted` });
  } catch (error) {
    next(error);
  }
};
