# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-06-16)

<section class="features">

### Features

-   [`54148e1`](https://github.com/stdlib-js/stdlib/commit/54148e18d543531ecfa547d752eb4f252d8e51f5) - add C `ndarray` API and refactor `blas/ext/base/srev` [(#4848)](https://github.com/stdlib-js/stdlib/pull/4848)

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`54148e1`](https://github.com/stdlib-js/stdlib/commit/54148e18d543531ecfa547d752eb4f252d8e51f5): rename `c_srev`

    -   To migrate, users should replace usage of `c_srev` with `stdlib_strided_srev`. The API signatures remain the same.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`54148e1`](https://github.com/stdlib-js/stdlib/commit/54148e18d543531ecfa547d752eb4f252d8e51f5) - **feat:** add C `ndarray` API and refactor `blas/ext/base/srev` [(#4848)](https://github.com/stdlib-js/stdlib/pull/4848) _(by Muhammad Haris, Athan Reines)_
-   [`62364f6`](https://github.com/stdlib-js/stdlib/commit/62364f62ea823a3b52c2ad25660ecd80c71f8f36) - **style:** fix C comment alignment _(by Philipp Burckhardt)_
-   [`272ae7a`](https://github.com/stdlib-js/stdlib/commit/272ae7ac5c576c68cfab1b6e304c86407faa20cd) - **docs:** remove comment _(by Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Muhammad Haris
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-28)

<section class="bug-fixes">

### Bug Fixes

-   [`3cf3d00`](https://github.com/stdlib-js/stdlib/commit/3cf3d00039ee92c03e3a181c00fe621555162fbd) - update build configurations

</section>

<!-- /.bug-fixes -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#1533](https://github.com/stdlib-js/stdlib/issues/1533)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`ceb4943`](https://github.com/stdlib-js/stdlib/commit/ceb494351d42c2505e559a2c8aad9a120c76d0db) - **docs:** remove comments _(by Athan Reines)_
-   [`3cf3d00`](https://github.com/stdlib-js/stdlib/commit/3cf3d00039ee92c03e3a181c00fe621555162fbd) - **fix:** update build configurations _(by Athan Reines)_
-   [`7c23a54`](https://github.com/stdlib-js/stdlib/commit/7c23a540fa9286c4ff1d7ec8411d56fc977fba82) - **refactor:** update `blas/ext/base/srev` to follow current project conventions [(#1700)](https://github.com/stdlib-js/stdlib/pull/1700) _(by Snehil Shah)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt
-   Snehil Shah

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`ac78ce0`](https://github.com/stdlib-js/stdlib/commit/ac78ce0b1ec7b3178eb955d4eeb7d3a3753a3561) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-23)

<section class="features">

### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.11">

## 0.0.11 (2022-08-29)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.10">

## 0.0.10 (2022-07-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.9">

## 0.0.9 (2022-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.8">

## 0.0.8 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2021-08-23)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-14)

No changes reported for this release.

</section>

<!-- /.release -->

