import { String } from "@airtasker/spot";

export interface LatestFirmwareInfo {
    data: {
        firmware_description: String;
        firmware_url: String;
        firmware_version: String;
    };
}

export const enum FirmwareType {
    NORDIC = "nordic",
    STM = "stm",
}
