import { IUserRepository } from "../../model";

export interface ILoginDetails {
    device: string;
}

export interface ILogin {
    user: Partial<IUserRepository>;
    details: Partial<ILoginDetails>;
}

export interface ICurrent {
    user: Partial<IUserRepository>;
}

export const topics = {
    Login: `USER_LOGIN`,
    Current: "USER_CURRENT"
};


