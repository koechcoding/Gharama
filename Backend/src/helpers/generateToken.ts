import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const generateToken = (
  email: string,
  id: string,
  isAdmin: string | number
) => {
  return jwt.sign(
    { email, id: id, isAdmin },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
    }
  );
};


