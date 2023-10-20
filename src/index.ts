import { logger } from "./modules/logger/model/basic-logging";
import express from "express";
import NodeServer from "./modules/server/model";
import { config } from "./config";

const server = new NodeServer(express());

// Add controllers and middlewares here..

server.start(config.port, () => {
    logger.info(`running on port ${config.port}`);
});


