import { settings } from "./settings";
import { TUserDB } from "../repository/users-repository/users-repository-types";
import jwt from "jsonwebtoken";

export const jwtService = {
  async createJWT(user: TUserDB) {
    const token = jwt.sign({ userId: user._id }, settings.JWT_SECRET, {
      expiresIn: "5h", //время смерти токена
    });

    return token;
  },

  async userIdGetByToken(token: string) {
    try {
      const result: any = jwt.verify(token, settings.JWT_SECRET);
      return result.userId;
    } catch (err) {
      return null;
    }
  },
};
