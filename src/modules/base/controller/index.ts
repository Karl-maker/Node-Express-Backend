import IDatabase from "../../../services/database";

export default class HTTPController {
    db: IDatabase<any>

    constructor(db: IDatabase<any>) {
        this.db = db;
    }
}