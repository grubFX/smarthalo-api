# Sources

This repository is based on work published by others. Everything below is credited to its original author.

The attribution of the other repositories of the project is in the [app repository](https://github.com/grubfx-dev/smarthalo-app/blob/main/docs/sources.md).

## The API definition and the server

The endpoint definitions and the server implementation started as `aolde/smarthalo-api`:

- https://github.com/aolde/smarthalo-api
- Author: aolde, with intrueder
- The API definition in `api-definition/` is theirs, the server skeleton in `api-server/` is theirs
- We extended it with the endpoints that were missing, based on the reverse engineering of the app

## The original server middleware

The original API was a set of AWS Lambda microservices behind API Gateway with DynamoDB. The shared middleware was published after the shutdown:

- `smarthalo-community/smarthalo-npm` - https://github.com/smarthalo-community/smarthalo-npm
- Contains the original `@smarthalo/auth-middleware` v2.2.0, `@smarthalo/body-validator-middleware`, `@smarthalo/dynamo-db-helper` and `@smarthalo/logger`
- The middleware author is listed as `adrien@smarthalo.bike`
- The original endpoint handlers were not published, the Bitbucket repos are gone

This gave us the auth architecture, the scope mechanism and the response envelope, see `docs/original-server.md`.

## The app

The API definition was reconstructed from the decompiled SmartHalo app, version 1.18.0:

- Package `bike.smarthalo.app`, published on APKPure as an XAPK bundle
- The app itself is not open source, these are decompiled sources

The app sources live in a separate repository, `smarthalo-app`.

## The community firmware

The device behaviour and the hardware details were cross referenced against the firmware source published by the SmartHalo Community:

- `smarthalo-community/smarthalo-firmware` - https://github.com/smarthalo-community/smarthalo-firmware

## What is ours

- The endpoint definitions we added, in `api-definition/endpoints/`, for the endpoints that were missing
- The models we added, in `api-definition/models/`
- `docs/original-server.md`, our notes on the original architecture
- `docs/sources.md`, this file
