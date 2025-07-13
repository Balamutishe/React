import { settings } from "./settings";
import { TUserDB } from "../repository/users-repository/users-repository-types";
import jwt from "jsonwebtoken";
import { usersService } from "../domain";

export const jwtService = {
  async createJWT(user: TUserDB) {
    const accessToken = jwt.sign({ userId: user._id }, settings.JWT_SECRET, {
      expiresIn: "1h", //время смерти токена
    });
    const refreshToken = jwt.sign({ userId: user._id }, settings.JWT_SECRET, {
      expiresIn: "1d",
    });

    return {
      accessToken,
      refreshToken,
    };
  },

  async refreshJWT(refreshToken: string) {
    const decoded: any = jwt.verify(refreshToken, settings.JWT_SECRET);

    const newAccessToken = jwt.sign(
      { userId: decoded.userId },
      settings.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    const newRefreshToken = jwt.sign(
      { userId: decoded.userId },
      settings.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return { newAccessToken, newRefreshToken };
  },

  async userIdGetByToken(token: string) {
    try {
      const decoded: any = jwt.verify(token, settings.JWT_SECRET);
      console.log(decoded.userId);

      if (!decoded.userId) {
        throw new Error("userID by accessToken not found");
      } else {
        return await usersService.userFindById(decoded.userId);
      }
    } catch (err) {
      return err;
    }
  },
};
