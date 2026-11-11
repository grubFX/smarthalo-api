# Working on this repository

## Rules

- All commits, docs, code comments and pull request descriptions are in English. The chat with the maintainer is in German, the repository is not.
- The commit messages follow the conventional commits, see [docs/commits.md](docs/commits.md).
- Documentation is concise. No walls of text, one idea per paragraph.
- A paragraph in the markdown is one line. There is no line length limit, a paragraph can be as long as it needs to be. Do not break a paragraph over several lines, the renderer joins them back together and the file only gets harder to read.
- Write plain sentences. No jargon, no words that only make sense for the people who wrote the code.
- Say it once. If two documents say the same thing, one of them links to the other.
- No bold text and no em dashes or en dashes in the markdown. Use a plain hyphen for ranges.
- Every claim in a document needs a link to its source. A link to the GitHub issue with the comment anchor, to the commit SHA, to the file with the line number, or to a URL. A claim without a source is a guess.
- Do not copy code from another repository. Link it as a git submodule instead.
- Check what goes into a commit before committing. Binaries, secrets and generated files need a deliberate decision.

## The endpoint definitions

`api-definition/` holds the API contract. The endpoints and models come from two places:

- The decompiled app sources, they show what the app actually calls.
- The original server middleware, published by the SmartHalo Community after the shutdown. It shows what the server actually did.

The upstream repository is `aolde/smarthalo-api`, it is the `upstream` remote. Our work happens on `main` in this repository, the upstream is not modified.

## Two response envelopes

The app parses two different shapes, a replacement server has to serve both.

- A plain object for login, signup and whoami.
- A data array for ride, firmware and token refresh.

Requests are wrapped the same way, the body is `{"data": {}}`.

The details are in [docs/original-server.md](docs/original-server.md).

## Layout

- `api-definition/` - the TypeScript endpoint definitions and models
- `api-docs/` - the generated API documentation
- `api-server/` - the server implementation
- `docs/` - notes on the original server

## Build

Needs Node and npm.

```
cd api-definition && npm install && npm run generate-docs
```

## Attribution

See [docs/sources.md](docs/sources.md). Anything added from another project needs an entry there.
