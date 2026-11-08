import {
    endpoint,
    body,
    headers,
    String,
    request,
    response,
    pathParams,
    Number,
    Boolean,
} from "@airtasker/spot";
import { AccessTokenHeader } from "../models/AccessTokenHeader";
import { ConsumerTokenHeader } from "../models/ConsumerTokenHeader";
import {
    UserConfigsRequest,
    UserConfigsResponse,
} from "../models/UserDeviceConfigs";

@endpoint({
    method: "GET",
    path: "/api/v2/users/:userId/configs",
    tags: ["UserDeviceConfigs"],
})
/** Get the device configs of a user */
class GetUserConfigs {
    @request
    request(
        @headers headers: AccessTokenHeader & ConsumerTokenHeader,
        @pathParams
        pathParams: {
            userId: Number;
        }
    ) {}

    @response({ status: 200 })
    response(@body body: UserConfigsResponse) {}
}

@endpoint({
    method: "PUT",
    path: "/api/v2/users/:userId/configs",
    tags: ["UserDeviceConfigs"],
})
/** Create or update the device configs of a user */
class CreateOrUpdateUserConfigs {
    @request
    request(
        @headers headers: AccessTokenHeader & ConsumerTokenHeader,
        @pathParams
        pathParams: {
            userId: Number;
        },
        @body body: UserConfigsRequest
    ) {}

    @response({ status: 200 })
    response(@body body: Boolean) {}
}

@endpoint({
    method: "DELETE",
    path: "/api/v2/users/:userId/configs",
    tags: ["UserDeviceConfigs"],
})
/** Delete the device configs of a user */
class DeleteUserConfigs {
    @request
    request(
        @headers headers: AccessTokenHeader & ConsumerTokenHeader,
        @pathParams
        pathParams: {
            userId: Number;
        },
        @body body: UserConfigsRequest
    ) {}

    @response({ status: 200 })
    response(@body body: Boolean) {}
}
