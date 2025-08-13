//! --> SOLICITUD --> |MIDDLEWARE| --> ENDPOINT

export const userValidator = (req, res, next) => {
      console.log(req.body);

  const user = req.body;
  if (!user || !user.first_name || !user.last_name || !user.email) {
    return res.status(400).json({ message: "Invalid user data" });
  }
  
  return next();
};
