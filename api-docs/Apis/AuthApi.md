# AuthApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**checkEmail**](AuthApi.md#checkEmail) | **POST** /auth/local/checkEmail |  |
| [**forgotPassword**](AuthApi.md#forgotPassword) | **POST** /auth/forgot |  |
| [**login**](AuthApi.md#login) | **POST** /auth/local/login |  |
| [**refreshToken**](AuthApi.md#refreshToken) | **POST** /auth/local/refresh_tokens |  |
| [**signup**](AuthApi.md#signup) | **POST** /auth/local/signup |  |


<a name="checkEmail"></a>
# **checkEmail**
> String checkEmail(CheckEmail\_request)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CheckEmail\_request** | [**CheckEmail_request**](../Models/CheckEmail_request.md)|  | |

### Return type

**String**

### Authorization

[SecurityHeader](../README.md#SecurityHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="forgotPassword"></a>
# **forgotPassword**
> String forgotPassword(CheckEmail\_request)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CheckEmail\_request** | [**CheckEmail_request**](../Models/CheckEmail_request.md)|  | |

### Return type

**String**

### Authorization

[SecurityHeader](../README.md#SecurityHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="login"></a>
# **login**
> UserResponse login(Login\_request)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Login\_request** | [**Login_request**](../Models/Login_request.md)|  | |

### Return type

[**UserResponse**](../Models/UserResponse.md)

### Authorization

[SecurityHeader](../README.md#SecurityHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="refreshToken"></a>
# **refreshToken**
> RefreshToken_200_response refreshToken(RefreshToken\_request)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **RefreshToken\_request** | [**RefreshToken_request**](../Models/RefreshToken_request.md)|  | |

### Return type

[**RefreshToken_200_response**](../Models/RefreshToken_200_response.md)

### Authorization

[SecurityHeader](../README.md#SecurityHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="signup"></a>
# **signup**
> UserResponse signup(SignupRequest)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **SignupRequest** | [**SignupRequest**](../Models/SignupRequest.md)|  | |

### Return type

[**UserResponse**](../Models/UserResponse.md)

### Authorization

[SecurityHeader](../README.md#SecurityHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

