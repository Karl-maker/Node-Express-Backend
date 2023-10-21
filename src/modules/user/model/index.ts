import BaseModel, { IResult } from "../../base/model";
import IDatabase from "../../database/model";

class UserRepository extends BaseModel<IUser> {
    constructor(db: IDatabase<IUser>){
        super(db);
    }

    async create(data: IUser): Promise<IResult<IUser>> {
        return await this.db.create(data);
    }

}

export interface IUser {
    id: string; // depends on SQL or noSQL
    first_name: string;
    last_name: string;
    email?: string;
    mobile?: string;
    password: string;
}

export default UserRepository;