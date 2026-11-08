# The releases

The versions follow the [semantic versioning](https://semver.org), the rule is in the [app repository](https://github.com/grubfx-dev/smarthalo-app/blob/main/docs/releasing.md).

The workflow `release.yml` of the API runs on the branch `main`. It reads the commits since the last tag, works out the version, writes the changelog and makes the tag and the release on GitHub.

The changelog is in `CHANGELOG.md`, it comes from the commit messages.

A test without a release tells what semantic-release would do, it changes nothing.

```
npm run release:dry
```

It needs Node 24, the version of the workflow.
