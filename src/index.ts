import { logger } from "./services/logger/basic-logging";
import express from "express";
import NodeServer from "./services/server";
import { config } from "./config";
import NodeEvent from "./services/event/node";
import { IEvent } from "./services/event";
import UserHTTPControllers from "./modules/user/routes";
import UserEventsControllers from "./modules/user/controller/events";
import DummyDB from "./services/database/dummy";
import IDatabase from "./services/database";

const server: NodeServer = new NodeServer(express());
const event: IEvent<any> = NodeEvent;
const db: IDatabase<any> = new DummyDB();

// Add controllers, events and middlewares here..

UserEventsControllers(event, db);
UserHTTPControllers(server, event, db)

server.start(config.port, () => {
    logger.info(`running on port ${config.port}`);
});


