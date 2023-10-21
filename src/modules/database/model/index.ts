import { IResult } from "../../base/model";

export default interface IDatabase<T> {
    create(data: Partial<T>): Promise<IResult<T>>;
    findById(id: string): Promise<IResult<T>>;
    findMany(where: Partial<T>): Promise<IResult<T>>;
    updateById(id: string, data: Partial<T>): Promise<IResult<T>>;
    updateMany(where: Partial<T>, data: Partial<T>): Promise<IResult<T>>;
    deleteById(id: string): Promise<IResult<T>>;
    deleteMany(where: Partial<T>): Promise<IResult<T>>;
}
