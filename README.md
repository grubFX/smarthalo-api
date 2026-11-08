# SmartHalo API

Documentation and an open source implementation of the SmartHalo cloud API.

## Why

SmartHalo went bankrupt in 2021. The company could not pay for server costs, so `api.smarthalo.bike` is gone. The SmartHalo 1 and 2 devices lost their cloud features.

The hardware still works, everything local on the phone does. This repo covers the part that was server side.

The app side is in `smarthalo-app`, the firmware side in `smarthalo-firmware`.

## Folders

- `api-definition` - the API schema in TypeScript, using `@airtasker/spot`. Generates the OpenAPI file and the markdown documentation
- `api-docs` - the built documentation
- `api-server` - a server implementation
- `docs` - notes on the original server architecture

## Commands

In `api-definition`:

```
yarn generate-docs   # regenerate api.yml and the markdown docs
yarn mock-server     # a mock server based on the API definition
```

## The original API

The app talks to `https://api.smarthalo.bike/` with two headers, `x-consumer-token` for the app and `x-access-token` for the user session.

The original server was a set of AWS Lambda microservices behind API Gateway with DynamoDB. The shared middleware was published after the shutdown, see `docs/original-server.md` and `docs/sources.md`.

The endpoint handlers themselves were not published, so they are reconstructed from the app. The endpoint definitions in `api-definition/endpoints/` are the source of truth.

## Endpoints

| Endpoint | Status |
|---|---|
| `POST /auth/local/login` | documented |
| `POST /auth/local/signup` | documented |
| `POST /auth/local/refresh_tokens` | documented |
| `POST /auth/local/checkEmail` | documented |
| `POST /auth/forgot` | documented |
| `GET /api/v1/users/whoami` | documented |
| `POST /api/v1/users/sendConfirm` | documented |
| `PUT /api/v1/users/update` | documented |
| `GET /api/v1/users/rides` | documented |
| `POST /api/v1/users/rides/sync` | documented |
| `GET /v2/users/me/rides/{ride_id}` | documented |
| `PATCH /v2/users/me/rides/{ride_id}` | documented |
| `DELETE /api/v2/rides/{ride_id}` | documented |
| `POST /v2/activities` | documented |
| `GET /api/v2/users/{userId}/configs` | documented |
| `PUT /api/v2/users/{userId}/configs` | documented |
| `DELETE /api/v2/users/{userId}/configs` | documented |
| `GET /api/v2/users/{userId}/favourites` | documented |
| `POST /api/v2/users/{userId}/favourites` | documented |
| `DELETE /api/v2/users/{userId}/favourites` | documented |
| `POST /api/v2/device_connections` | documented |
| `GET /v2/dfu` | documented |

## Sources

This is based on work published by others. See [docs/sources.md](docs/sources.md) for full attribution.
