import {
    endpoint,
    body,
    headers,
    String,
    request,
    response,
    queryParams,
} from "@airtasker/spot";
import { AccessTokenHeader } from "../models/AccessTokenHeader";
import { ConsumerTokenHeader } from "../models/ConsumerTokenHeader";
import { LatestFirmwareInfo } from "../models/Firmware";

@endpoint({
    method: "GET",
    path: "/v2/dfu",
    tags: ["Firmware"],
})
/** Get the latest firmware info for a device model */
class GetLatestFirmwareInfo {
    @request
    request(
        @headers headers: AccessTokenHeader & ConsumerTokenHeader,
        @queryParams
        queryParams: {
            firmware_version: String;
            device_model: String;
        }
    ) {}

    @response({ status: 200 })
    response(@body body: LatestFirmwareInfo) {}
}
