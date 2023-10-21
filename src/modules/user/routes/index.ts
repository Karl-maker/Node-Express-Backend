import IDatabase from "../../../services/database";
import { IEvent } from "../../../services/event";
import NodeServer from "../../../services/server";
import UserHTTPController from "../controller/http";

const ROUTE = '/user';

const UserRoutesV1 = (server: NodeServer, event: IEvent<any>, db: IDatabase<any>) => {
    const userHTTPController = new UserHTTPController(db);

    server.app.get(`${ROUTE}`, userHTTPController.getCurrentUserController(event))
}

export default UserRoutesV1;