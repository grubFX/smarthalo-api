import { Int32, String } from "@airtasker/spot";

export interface DeviceConnectionEvent {
    device_id?: String;
    device_version?: String;
    event_type: String;
    lock_serial?: String;
    pcba_serial?: String;
    product_serial?: String;
    user_id: Int32;
}

export const enum DeviceConnectionEventType {
    PAIR = "PAIR",
    FORGET = "FORGET",
}
