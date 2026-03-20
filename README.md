# SuvivalTypeScriptESLint
Practice ESLint of TypeScript with [サバイバルTypeSctipt](https://typescriptbook.jp/tutorials/eslint).

### Remarks
* [ESLint Documents](https://eslint.org/docs/latest/)

---

# Initialization
1. Install TypeScript.
```shell
npm install -D typescript
```
2. Install `jiti` for config of ESLint.
```shell
npm install -D jiti
```
3. Initialize ESLint
```shell
npm init -y @eslint/config@latest
```
4. Install eslint-plugin
```shell
npm install -D @stylistic/eslint-plugin
```

---

# Do ESLint
```shell
npx eslint
```

## with fixing
```shell
npx eslint --fix
```

---

# Trouble-shoooooting

## When it initializing ESLint,

* `npm init -y @eslint/config@latest`実行時の選択肢の案内が不足している。
* 意図しない選択肢になってしまった場合、Ctrl + Cで中断し、最初からやり直す。