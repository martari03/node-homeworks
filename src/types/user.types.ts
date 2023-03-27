export interface IUser {
  name: string;
  email: string;
  password: string;
  gender: string;
}

export enum EGenders {
  male = "male",
  female = "female",
  mixed = "mixed",
}
