# Original server architecture

Recovered from the public `smarthalo-community/smarthalo-npm` repository, which contains the original server middleware published after the shutdown.

## Stack

The original API was a set of AWS Lambda microservices behind API Gateway, with DynamoDB as the database and `middy` for the middleware chain.

Published packages:

- `@smarthalo/auth-middleware` v2.2.0
- `@smarthalo/body-validator-middleware`
- `@smarthalo/dynamo-db-helper`
- `@smarthalo/logger`

The middleware repos point at `bitbucket.org/smart_halo/`, which is gone.

## Auth

Authenticated endpoints do not validate the JWT themselves. They forward to a separate auth service and pass a list of scopes.

```
GET {authService}/v2/access_token_validation
  ?scopes=dfu_allow_write,other_scope
  headers:
    x-consumer-token: <app token>
    x-access-token: <user jwt>
```

The auth service URLs, from `access-token-validation.middleware.ts`:

| Environment | URL |
|---|---|
| development | `https://devapi.smarthalo.bike/v2/access_token_validation` |
| staging | `https://stageapi.smarthalo.bike/v2/access_token_validation` |
| production | `https://api.smarthalo.bike/v2/access_token_validation` |
| local | `http://localhost:3000/v2/access_token_validation` |

If the response is not 200 the request is rejected. On failure the middleware reads `error.message` and `error.status` from the response body and rethrows as an HTTP error, defaulting to 403 Forbidden.

Scopes are per endpoint, for example `dfu_allow_write` for the DFU endpoint.

The author of the middleware package is `adrien@smarthalo.bike`.

## Response format

From `types/api.d.ts`:

```ts
export interface ErrorResponseBody {
  message: string;
  status: number;
}

export interface Payload<T> {
  data: T;
  user: { id: string };
}
```

So the API returns a `data` wrapper and the resolved user id. The app reads this with `GenericApiResponse.getValue()`, which takes the first element of the `data` array, so the array form is what the app expects in practice.

## Errors

Error bodies follow `ErrorResponseBody`, so `message` plus a numeric `status`.

## Body validation

The body validator middleware is a thin wrapper around `@middy/validator`. It parses the string event body into a JSON object before validation, so endpoints use standard JSON schema rules.

## What is missing

The published packages are the shared middleware only. The endpoint handlers themselves were not published. The Bitbucket repos are gone.

So the exact DynamoDB table layouts, the endpoint routing, the JWT signing keys and the scope definitions are not recoverable from these packages. They have to be reconstructed from the app, which is what `api-definition` is for.
