import IDatabase from "../../database/model";
import DummyDB from "../../database/model/dummy";
import { IEvent } from "../../event";
import NodeServer from "../../server/model";
import UserHTTPController from "../controller/http";
import { Request, Response, NextFunction } from "express";

const ROUTE = '/user';

const UserRoutesV1 = (server: NodeServer, event: IEvent<any>, db: IDatabase<any>) => {
    const userHTTPController = new UserHTTPController(db);

    server.app.get(`${ROUTE}`, userHTTPController.getCurrentUserController(event))
}

export default UserRoutesV1;