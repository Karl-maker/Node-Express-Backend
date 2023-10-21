import IDatabase from "../../database/model";

export default class HTTPController {
    db: IDatabase<any>

    constructor(db: IDatabase<any>) {
        this.db = db;
    }
}