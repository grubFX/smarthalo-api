import {
    endpoint,
    body,
    headers,
    String,
    request,
    response,
} from "@airtasker/spot";
import { AccessTokenHeader } from "../models/AccessTokenHeader";
import { ConsumerTokenHeader } from "../models/ConsumerTokenHeader";
import { ActivityRequest } from "../models/Activity";

@endpoint({
    method: "POST",
    path: "/v2/activities",
    tags: ["Activity"],
})
/** Report a device connection event */
class SendConnectionActivity {
    @request
    request(
        @headers headers: AccessTokenHeader & ConsumerTokenHeader,
        @body body: ActivityRequest
    ) {}

    @response({ status: 200 })
    response(@body body: ActivityRequest) {}
}
