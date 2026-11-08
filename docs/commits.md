# The commit messages

The commit messages follow the [conventional commits](https://www.conventionalcommits.org).
The type says what kind of change it is, the scope says where it is.

```
type(scope): the subject
```

| Type | What it means |
|---|---|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | The documentation only |
| `refactor` | The code changes, but nothing new and nothing broken |
| `perf` | The code gets faster |
| `test` | The tests |
| `build` | The build system and the dependencies |
| `ci` | The workflows and the scripts of the CI |
| `chore` | Everything else, the housekeeping |
| `revert` | The undo of a commit |

The scope is optional. It says which part of the repository the change
touches, for example `sdk` in the device repository or `minimal` in the app
repository. It is in kebab-case.

The subject is a short description in the imperative, it starts with a
lower case letter and it has no full stop at the end.

```
feat(sdk): add the parser for the log lines
fix(core): keep the alarm report when the device sends it twice
build: publish the library to the packages of GitHub
ci: check the commit messages
```

## The check

The check runs twice.

- The hook of the repository checks the message before the commit is made.
  It needs the node modules, they come with `npm install`.
- The workflow `commits.yml` checks the commits of a pull request again.

## The setup

```
npm install
```

That installs the linter and it writes the hook into the git directory. The
hook is not tracked by git, every new clone of the repository needs the
command above before the first commit.
