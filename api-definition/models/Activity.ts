import { Boolean, Int32, String } from "@airtasker/spot";

export interface ActivityRequest {
    data: {
        type: String;
        attributes: ConnectionActivityRequest;
    };
}

export interface ConnectionActivityRequest {
    accelerometer?: String;
    app_version?: String;
    battery_in_charge?: Boolean;
    battery_state_of_charge?: Int32;
    configuration?: String;
    device_id?: String;
    device_model?: String;
    hardware_version?: String;
    lock_serial?: String;
    nordic_bootloader?: String;
    nordic_firmware?: String;
    pcba_serial?: String;
    phone_model?: String;
    phone_os?: String;
    phone_os_version?: String;
    product_serial?: String;
    stm_bootloader?: String;
    stm_firmware?: String;
    user_auth_level?: String;
    };
}

export const enum ActivityType {
    DEVICE_CONNECTION = "device_connection",
}

export const enum DeviceAuthLevel {
    PUBLIC = "PUBLIC",
    BETA = "BETA",
    ALPHA = "ALPHA",
}
