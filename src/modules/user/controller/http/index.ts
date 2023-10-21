import { Request, Response, NextFunction } from "express";
import UserRepository, { IUserRepository } from "../../model";
import IDatabase from "../../../database/model";
import HTTPController from "../../../controller/model";
import HTTPError from "../../../../utils/error";
import { IEvent } from "../../../event";
import * as Definitions from "../events/definitions";

export default class UserHTTPController extends HTTPController {

    constructor(db: IDatabase<IUserRepository>) {
        super(db);
    };

    getCurrentUserController(event: IEvent<any>){

        return async(req: Request, res: Response, next: NextFunction) => {
            try {
                const id = "1";
                const user = new UserRepository(this.db);
                const result = await user.findById(id);
                const payload: Partial<Definitions.ICurrent> = {
                    user: {
                        ...result.details
                    }
                }

                if(!result.details && result.successful) {
                    throw new HTTPError('User Not Found', 404);
                }

                event.publish(Definitions.topics.Current, payload);
                res.json(result);
            } catch(err) {
                next(err);
            }            
        }


    }
}