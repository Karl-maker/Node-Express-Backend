import BaseModel, { IResult } from "../../base/model";
import IDatabase from "../../database/model";

class UserRepository extends BaseModel<IUserRepository> {
    constructor(db: IDatabase<IUserRepository>){
        super(db);
    }
}

export interface IUserRepository {
    id: string; // depends on SQL or noSQL
    first_name: string;
    last_name: string;
    email?: string;
    mobile?: string;
    password: string;
}

export default UserRepository;