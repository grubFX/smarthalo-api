# Documentation for SmartHalo API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *AuthApi* | [**checkEmail**](Apis/AuthApi.md#checkEmail) | **POST** /auth/local/checkEmail |  |
*AuthApi* | [**forgotPassword**](Apis/AuthApi.md#forgotPassword) | **POST** /auth/forgot |  |
*AuthApi* | [**login**](Apis/AuthApi.md#login) | **POST** /auth/local/login |  |
*AuthApi* | [**refreshToken**](Apis/AuthApi.md#refreshToken) | **POST** /auth/local/refresh_tokens |  |
*AuthApi* | [**signup**](Apis/AuthApi.md#signup) | **POST** /auth/local/signup |  |
| *RidesApi* | [**deleteRide**](Apis/RidesApi.md#deleteRide) | **DELETE** /api/v2/rides/{ride_id} | Delete ride by ID |
*RidesApi* | [**getRide**](Apis/RidesApi.md#getRide) | **GET** /v2/users/me/rides/{ride_id} | Get ride by ID |
*RidesApi* | [**getUserRides**](Apis/RidesApi.md#getUserRides) | **GET** /api/v1/users/rides | Get user rides |
*RidesApi* | [**updateRide**](Apis/RidesApi.md#updateRide) | **PATCH** /v2/users/me/rides/{ride_id} | Update ride by ID |
*RidesApi* | [**uploadUserRides**](Apis/RidesApi.md#uploadUserRides) | **POST** /api/v1/users/rides/sync | Upload user rides |
| *UserApi* | [**getUser**](Apis/UserApi.md#getUser) | **GET** /api/v1/users/whoami | Get User |
*UserApi* | [**sendConfirm**](Apis/UserApi.md#sendConfirm) | **POST** /api/v1/users/sendConfirm | Send Confirm |
*UserApi* | [**updateUser**](Apis/UserApi.md#updateUser) | **POST** /api/v1/users/update | Update User |


<a name="documentation-for-models"></a>
## Documentation for Models

 - [CheckEmail_request](./Models/CheckEmail_request.md)
 - [CloudMarker](./Models/CloudMarker.md)
 - [CloudRide](./Models/CloudRide.md)
 - [CloudRide_data](./Models/CloudRide_data.md)
 - [CloudSignificantMarker](./Models/CloudSignificantMarker.md)
 - [FitnessIntegrations](./Models/FitnessIntegrations.md)
 - [Login_request](./Models/Login_request.md)
 - [PastRide](./Models/PastRide.md)
 - [PatchRideRequest](./Models/PatchRideRequest.md)
 - [PatchRideRequest_data](./Models/PatchRideRequest_data.md)
 - [RefreshToken_200_response](./Models/RefreshToken_200_response.md)
 - [RefreshToken_request](./Models/RefreshToken_request.md)
 - [RideMarker](./Models/RideMarker.md)
 - [RideUploadLocation](./Models/RideUploadLocation.md)
 - [RideUploadPayload](./Models/RideUploadPayload.md)
 - [SHLocation](./Models/SHLocation.md)
 - [SHUser](./Models/SHUser.md)
 - [SignupRequest](./Models/SignupRequest.md)
 - [UserEmailRequest](./Models/UserEmailRequest.md)
 - [UserResponse](./Models/UserResponse.md)
 - [UserUpdateRequest](./Models/UserUpdateRequest.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="SecurityHeader"></a>
### SecurityHeader

- **Type**: API key
- **API key parameter name**: x-consumer-token
- **Location**: HTTP header

