import { IUserRepository } from "../../model";
import { IEvent } from "../../../event";
import EventController from "../../../event/controller";
import * as Definitions from "./definitions";
import IDatabase from "../../../database/model";

const UserEventController = (event: IEvent<any>, db: IDatabase<any>) => {
    const eventController = new EventController(event);

    eventController.on(Definitions.topics.Current, async (payload: Partial<Definitions.ICurrent>): Promise<void> => {
        console.log(payload, `A user checked who he is`)
    });

}

export default UserEventController;