# Usage

A simple cli for download project template.

## Install

```js
npm install -g bartman-cli
yarn global add bartman-cli
pnpm add -g bartman-cli
```

## Create Project Template

- name: project name（required）
- type: project template type（default [react-chrome-extensions](https://github.com/superbartman/react-chrome-extensions)）
- -f: force delete the exist folder when create

```js
bart-test create [name] [type]
bart-test create [name] [type] -f
```
