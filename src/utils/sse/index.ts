import { default as EE } from "events";
import { TUpdateEvent } from "./index.types";

export class EventEmitter {
  static instance: EE;

  static getInstance() {
    if (!EventEmitter.instance) {
      EventEmitter.instance = new EE();
    }
    return EventEmitter.instance;
  }
}

export const EventNameFn: Record<TUpdateEvent, (param?: string | number) => string> = {
  getManyParkingLots: () => "getManyParkingLots",
  getSingleParkingLot: (id: number) => `getSingleParkingLot-${id}`,
  getSingleTicket: (id: number) => `getSingleTicket-${id}`,
};
