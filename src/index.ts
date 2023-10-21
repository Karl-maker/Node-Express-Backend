import { logger } from "./modules/logger/model/basic-logging";
import express, { Request, Response, NextFunction } from "express";
import NodeServer from "./modules/server/model";
import { config } from "./config";
import NodeEvent from "./modules/event/node";
import { IEvent } from "./modules/event";
import UserHTTPControllers from "./modules/user/routes";
import UserEventsControllers from "./modules/user/controller/events";
import DummyDB from "./modules/database/model/dummy";
import IDatabase from "./modules/database/model";

const server: NodeServer = new NodeServer(express());
const event: IEvent<any> = NodeEvent;
const db: IDatabase<any> = new DummyDB();

// Add controllers, events and middlewares here..

UserEventsControllers(event, db);
UserHTTPControllers(server, event, db)

server.start(config.port, () => {
    logger.info(`running on port ${config.port}`);
});


