import * as service from "../services/user.services.js";

export const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await service.getByIdUser(id);
    res.json(item);
  } catch (error) {
    next(error);
  }
};

export const getByEmail = async (req, res, next) => {
  try {
    const { email } = req.params;
    const item = await service.getByEmailUser(email);
    res.json(item);
  } catch (error) {
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const response = await service.getAllUsers(page, limit);
    res.json(response);
    // const next = response.hasNextPage ? `http://localhost:8080/users/all?page=${response.nextPage}` : null;
    // const prev = response.hasPrevPage ? `http://localhost:8080/users/all?page=${response.prevPage}` : null;
    // res.json({
    //   payload: response.docs,
    //   info: {
    //     count: response.totalDocs,
    //     pages: response.totalPages,
    //     next,
    //     prev
    //   }
    // })
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    const newUser = await service.register(req.body);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const userUpdated = await service.updateUser(id, req.body);

    res.json(userUpdated);
  } catch (error) {
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    await service.deleteUser(id);

    res.json({
      msg: "User deleted",
    });
  } catch (error) {
    next(error);
  }
};
