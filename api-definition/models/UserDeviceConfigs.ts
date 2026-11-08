import { Boolean, String } from "@airtasker/spot";

export interface UserConfigsRequest {
    configs: {
        [key: string]: String;
    };
    user_id: String;
}

export interface UserConfigsResponse {
    success: Boolean;
    configs?: {
        [key: string]: String;
    };
}
