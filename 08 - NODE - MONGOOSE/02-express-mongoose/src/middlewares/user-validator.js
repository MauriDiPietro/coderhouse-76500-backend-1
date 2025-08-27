//! --> SOLICITUD --> |MIDDLEWARE| --> ENDPOINT

export const userValidator = (req, res, next) => {
  const user = req.body;
  if (!user || !user.firstname || !user.lastname || !user.email) {
    return res.status(400).json({ message: "Invalid user data" });
  }
  next();
};
