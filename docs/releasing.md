# The releases

The versions follow the [semantic versioning](https://semver.org).

```
MAJOR.MINOR.PATCH
```

- The **major** part goes up when something breaks that the users of the
  library rely on. The commit message says `BREAKING CHANGE`.
- The **minor** part goes up when something is added.
- The **patch** part goes up when something is fixed.

The version comes from the commit messages, not from a file. The rule is
in [commits.md](commits.md), the types `feat`, `fix` and `BREAKING CHANGE`
are the ones that raise the version.

## The branches

The release comes from the branch `main`. The branch `develop` is where the
work happens, it goes into `main`.

```
develop  -->  main  -->  the release
```

The version of the library is in `gradle.properties` as `deviceVersion`. It
is the fallback for a build without a tag. The version of the release goes
into the build of the publication, so the artefact in the package
repository has the same version as the tag.

## What a release does

The workflow `release.yml` runs on the branch `main`.

- It reads the commits since the last tag and works out the version.
- It publishes the library to the package repository of GitHub with that
  version.
- It writes the changelog and pushes it into the branch.
- It makes the tag and the release on GitHub.

The package repository belongs to this repository, so the library stays
private.

## The changelog

The changelog is in `CHANGELOG.md`, it comes from the commit messages.

## A test without a release

The dry run tells what semantic-release would do, it changes nothing.

```
npm run release:dry
```

It needs Node 24, the version of the workflow.
