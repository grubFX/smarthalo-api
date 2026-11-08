import { Date, Double, Int32, String } from "@airtasker/spot";

export interface UserFavourite {
    address?: String;
    createdAt?: Date;
    favourite_type: String;
    id?: Int32;
    label?: String;
    lat: Double;
    lng: Double;
    updatedAt?: Date;
    user_id?: Int32;
}

export interface CreateFavouriteRequest {
    address?: String;
    favourite_type: String;
    label?: String;
    lat: Double;
    lng: Double;
    user_id?: Int32;
}

export const enum FavouriteType {
    FAVOURITE = "FAVOURITE",
    HOME = "HOME",
    WORK = "WORK",
}
