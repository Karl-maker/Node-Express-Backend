import IDatabase from "../../database/model";

export default class BaseModel<T> {
    db: IDatabase<any>;

    constructor(db: IDatabase<any>) {
        this.db = db;
    }

    async create(data: T): Promise<IResult<T>> {
        return await this.db.create(data);
    }

    async deleteById(id: string): Promise<IResult<T>> {
        return await this.db.deleteById(id);
    }

    async deleteMany(where: Partial<T>): Promise<IResult<T>> {
        return await this.db.deleteMany(where);
    }

    async updateById(id: string, where: Partial<T>): Promise<IResult<T>> {
        return await this.db.updateById(id, where);
    }

    async updateMany(where: Partial<T>, data: Partial<T>): Promise<IResult<T>> {
        return await this.db.updateMany(where, data);
    }

    async findById(id: string): Promise<IResult<T>> {
        return await this.db.findById(id);
    }

    async findMany(where: Partial<T>): Promise<IResult<T>> {
        return await this.db.findMany(where);
    }
}

export interface IResult<T> {
    successful: boolean;
    message: string;
    details?: Partial<T>;
}


