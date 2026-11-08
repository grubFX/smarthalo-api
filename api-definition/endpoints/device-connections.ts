import {
    endpoint,
    body,
    headers,
    String,
    request,
    response,
    pathParams,
    Number,
} from "@airtasker/spot";
import { AccessTokenHeader } from "../models/AccessTokenHeader";
import { ConsumerTokenHeader } from "../models/ConsumerTokenHeader";
import { DeviceConnectionEvent } from "../models/DeviceConnection";

@endpoint({
    method: "POST",
    path: "/api/v2/device_connections",
    tags: ["DeviceConnections"],
})
/** Report a device pairing or forget event */
class SendDeviceConnectionEvent {
    @request
    request(
        @headers headers: AccessTokenHeader & ConsumerTokenHeader,
        @body body: DeviceConnectionEvent
    ) {}

    @response({ status: 200 })
    response(@body body: String) {}
}
