import { logger } from "./modules/logger/model/basic-logging";
import express, { Request, Response, NextFunction } from "express";
import NodeServer from "./modules/server/model";
import { config } from "./config";
import NodeEvent from "./modules/event/node";
import { IEvent } from "./modules/event";

const server: NodeServer = new NodeServer(express());
const event: IEvent<any> = NodeEvent;

// Add controllers and middlewares here..

event.subscribe("/", (msg) => {
    console.log(msg);
});

server.app.get('/', (req: Request, res: Response, next: NextFunction) => {
    event.publish('/', "GET REQUEST TRIGGERED");
    res.json({ message: 'GET REQUEST TRIGGERED' });
});

server.start(config.port, () => {
    logger.info(`running on port ${config.port}`);
});


