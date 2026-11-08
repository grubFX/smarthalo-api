// The commit messages follow the conventional commits.
//
// The type says what kind of change it is, the scope says where it is.
// The scope is optional, not every change belongs to one part of the
// repository.
//
// See https://www.conventionalcommits.org
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // The scope is not mandatory.
        'scope-enum': [1, 'always'],
        'scope-case': [2, 'always', 'kebab-case'],
        // The type is lower case, the header is one line of at most one
        // hundred characters.
        'type-case': [2, 'always', 'lower-case'],
        'header-max-length': [2, 'always', 100],
        // The subject is a short description in the imperative. It starts
        // with a lower case letter and it has no full stop at the end.
        'subject-case': [2, 'always', 'lower-case'],
        'subject-full-stop': [2, 'never'],
        'body-max-line-length': [2, 'always', 100],
        'footer-max-line-length': [2, 'always', 100],
    },
};
