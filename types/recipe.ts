import type { IUser } from "./user";

export type IRecipe = {
  title: string;
  creator: IUser;
  description?: string;
  thumbnail?: string;
  _id: string;
  date_posted: Date;
};
