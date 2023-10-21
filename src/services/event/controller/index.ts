import { IEvent } from "..";

export default class EventController {
    event: IEvent<any>

    constructor(event: IEvent<any>) {
        this.event = event;
    }

    on(topic: string, callback: (payload: any) => Promise<void>) {
        this.event.subscribe(topic, callback);
    }
}