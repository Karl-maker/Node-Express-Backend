import IDatabase from "..";
import { IResult } from "../../../modules/base/model";

class DummyDB implements IDatabase<any> {
    
    async findById(id: string): Promise<IResult<any>> {
        const result: IResult<any> = {
            message: "Successful",
            successful: true,
            details: {
                id,
                email: 'test@gmail.com'
            }
        } 
        
        return result;
    }
    findMany(where: object): Promise<IResult<any>> {
        throw new Error("Method not implemented.");
    }
    updateById(id: string, data: Partial<any>): Promise<IResult<any>> {
        throw new Error("Method not implemented.");
    }
    updateMany(where: object, data: Partial<any>): Promise<IResult<any>> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: string): Promise<IResult<any>> {
        throw new Error("Method not implemented.");
    }
    deleteMany(where: object): Promise<IResult<any>> {
        throw new Error("Method not implemented.");
    }

    async create(data: any): Promise<IResult<any>> {
        const result: IResult<any> = {
            message: "Successful",
            successful: true,
            details: {
                ...data
            }
        } 
        
        return result;
    };

}

export default DummyDB;