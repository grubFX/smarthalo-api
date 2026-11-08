// The releases follow the semantic versioning.
//
// The version comes from the commit messages. A fix raises the patch
// part, a feature raises the minor part, a commit that says
// "BREAKING CHANGE" raises the major part.
//
// The release comes from the branch main. There is no other branch, the
// work happens in a pull request and it goes into main.
//
// The rules are in the documentation of semantic-release.
//
// See https://semantic-release.gitbook.io
module.exports = {
    branches: [
        'main',
    ],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/git',

        '@semantic-release/github',
    ],
    // The changelog and the commit of the release go into the branch.
    '@semantic-release/changelog': {
        changelogFile: 'CHANGELOG.md',
    },
    '@semantic-release/git': {
        assets: ['CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    },
    '@semantic-release/github': {
        assets: [
            { path: 'CHANGELOG.md', label: 'Changelog' },
        ],
    },
};
