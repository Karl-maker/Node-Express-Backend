import { Express } from 'express';
import http, { Server } from 'http';

class NodeServer {
    server: Server;
    app: Express;

    constructor(app: Express) {
        this.app = app;
        this.server = http.createServer(app);
    }

    start(port: number, callback: Function): void {
        this.server.listen(port, () => {
            callback();
        });
    }

    stop(callback: (error?: Error) => void): void {
        this.server.close((error) => {
            callback(error);
        });
    }
    
}

export default NodeServer;
