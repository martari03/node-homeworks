import { IUser } from "./user.types";

export type IActionTokenPayload = Pick<IUser, "_id">;

export interface ITokenPair {
  accessToken: string;
  refreshToken: string;
}

export type ITokenPayload = Pick<IUser, "_id" | "name">;
