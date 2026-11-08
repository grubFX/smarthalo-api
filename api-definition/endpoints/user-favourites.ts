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
    queryParams,
} from "@airtasker/spot";
import { AccessTokenHeader } from "../models/AccessTokenHeader";
import { ConsumerTokenHeader } from "../models/ConsumerTokenHeader";
import {
    UserFavourite,
    CreateFavouriteRequest,
} from "../models/UserFavourites";

@endpoint({
    method: "GET",
    path: "/api/v2/users/:userId/favourites",
    tags: ["UserFavourites"],
})
/** Get the favourites of a user */
class GetUserFavourites {
    @request
    request(
        @headers headers: AccessTokenHeader & ConsumerTokenHeader,
        @pathParams
        pathParams: {
            userId: Number;
        }
    ) {}

    @response({ status: 200 })
    response(@body body: UserFavourite[]) {}
}

@endpoint({
    method: "POST",
    path: "/api/v2/users/:userId/favourites",
    tags: ["UserFavourites"],
})
/** Create a favourite for a user */
class CreateUserFavourite {
    @request
    request(
        @headers headers: AccessTokenHeader & ConsumerTokenHeader,
        @pathParams
        pathParams: {
            userId: Number;
        },
        @body body: CreateFavouriteRequest
    ) {}

    @response({ status: 200 })
    response(@body body: Boolean) {}
}

@endpoint({
    method: "DELETE",
    path: "/api/v2/users/:userId/favourites",
    tags: ["UserFavourites"],
})
/** Delete a favourite of a user */
class DeleteUserFavourite {
    @request
    request(
        @headers headers: AccessTokenHeader & ConsumerTokenHeader,
        @pathParams
        pathParams: {
            userId: Number;
        },
        @queryParams
        queryParams: {
            favourite_id: Number;
        }
    ) {}

    @response({ status: 200 })
    response(@body body: Boolean) {}
}
