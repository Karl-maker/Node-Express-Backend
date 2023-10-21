import { IUserRepository } from "../../model";
import { IEvent } from "../../../../services/event";
import EventController from "../../../../services/event/controller";
import * as Definitions from "./definitions";
import IDatabase from "../../../../services/database";

const UserEventController = (event: IEvent<any>, db: IDatabase<any>) => {
    const eventController = new EventController(event);

    eventController.on(Definitions.topics.Current, async (payload: Partial<Definitions.ICurrent>): Promise<void> => {
        console.log(payload, `A user checked who he is`)
    });

}

export default UserEventController;