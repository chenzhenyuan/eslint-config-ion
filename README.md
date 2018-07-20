# eslint-config-ion
![Product Info](https://img.shields.io/badge/ESLint-Config-blue.svg)
![Build Status](https://www.travis-ci.org/chenzhenyuan/eslint-config-ion.svg?branch=master)
![Release Version](https://img.shields.io/github/release/chenzhenyuan/eslint-config-ion.svg)
![Publish Version](https://img.shields.io/npm/v/eslint-config-ion.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com)

ESLint Config for the Ion JavaScript style guide
## Installation
---

Install using:

``` bash
$ yarn add --dev eslint eslint-plugin-react eslint-plugin-import eslint-config-ion
```

## Usage
---

Add ion rules to the plugins section of your .eslintrc configuration file.

``` json
{
  "extends": ["ion"]
}
```

Or

``` json
{
  "extends": ["eslint-config-ion"]
}
```