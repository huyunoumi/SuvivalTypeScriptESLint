# SuvivalTypeScriptESLint
ESLintのサンプルプロジェクトです。<br>
Practice ESLint of TypeScript with [サバイバルTypeSctipt](https://typescriptbook.jp/tutorials/eslint).

### 参考（Remarks）
* [ESLint Documents](https://eslint.org/docs/latest/)

# 環境（Environment）
<table>
  <!-- ヘッダ -->
  <tr>
    <td>License</td>
    <td>Lang</td>
    <td>Libraries</td>
    <td>IDE</td>
    <td>Other</td>
  </tr>
  <!-- ボディ -->
  <tr>
    <td>
      <a href="./LICENSE">
        <img src="http://img.shields.io/badge/license-MIT-blue.svg?style=flat">
      </a>
    </td>
    <td>
      <!-- TypeScript -->
      <a href="https://www.typescriptlang.org/ja/">
        <img src="https://img.shields.io/badge/-TypeScript-blue.svg?style=flat">
      </a>
    </td>
    <td>
      <!-- ESLint -->
      <a href="https://eslint.org/">
        <img src="https://img.shields.io/badge/-ESLint-purple.svg?logo=ESLint&style=flat">
      </a>
      <!-- jiti -->
      <img src="https://img.shields.io/badge/-jiti-EEE.svg?style=flat">
    </td>
    <td>
      <!-- VSCode -->
      <a href="https://code.visualstudio.com/">
        <img src="https://img.shields.io/badge/-VSCode-blue.svg?style=flat">
      </a>
    </td>
    <td>
      <!-- npm -->
      <a href="https://www.npmjs.com/">
        <img src="https://img.shields.io/badge/-npm-red.svg?logo=npm&style=flat">
      </a>
    </td>
  </tr>
</table>

# 環境構築（Initialization）
1. TypeScriptのインストール（Install TypeScript.）
```shell
npm install -D typescript
```
2. jitiのインストール（Install `jiti` for config of ESLint.）
```shell
npm install -D jiti
```
3. ESLintの初期化（Initialize ESLint）
```shell
npm init -y @eslint/config@latest
```
4. ESLintのプラグインのインストール（Install eslint-plugin）
```shell
npm install -D @stylistic/eslint-plugin
```

# ESLintの使用方法（Do ESLint）
```shell
npx eslint
```

### 自動修正あり（with fixing）
```shell
npx eslint --fix
```

# トラブルシューティング（Trouble-shooting）

## ESLintの初期化時（When it initializing ESLint,）

* `npm init -y @eslint/config@latest`実行時の選択肢の案内が不足している。
* 意図しない選択肢になってしまった場合、Ctrl + Cで中断し、最初からやり直す。
