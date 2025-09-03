import { dirname } from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

export const __dirname = dirname(fileURLToPath(import.meta.url));

export const getRandomNumber = () => {
  const random = Math.floor(Math.random() * 50);
  return random;
};

export class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.status = statusCode;
  }
}

// throw new CustomError('message de error', 404)

export const createHash = (user) => {
  const salt = crypto.randomBytes(128).toString();
  return crypto
    .createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");
};