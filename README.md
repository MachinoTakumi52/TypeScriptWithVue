# vue(TypeScript)開発にあたって

## もくじ

- [開発環境](#開発環境)
  - Docker
  - 実行環境
  - 言語
  - フレームワーク
  - ビルドツール
- [プロジェクト作成](#プロジェクト作成について)
  - 必要最低限インストールしたものについて
- [必要によってインストールすべきライブラリ](#必要によってインストールすべきライブラリ)
  - 非同期通信ライブラリ `axios`
  - フロントテストライブラリ `mock-adapter`
  - UI フレームワーク `vuetify`
  - pinia プラグイン `pinia-plugin-persistedstate`
  - 日付フォーマット `day.js`
- [フォルダ構成](#フォルダ構成)
- [開発に必要なコマンドについて](#開発に必要なコマンドについて)
  - ライブラリのインストール
  - デバック(ホットリロード有効)

## 開発環境

### Docker

linux  
ディストリビューション `debian`

### 実行環境

node `18.13.0`

### 言語

typeScript `5.0.4`

### フレームワーク

vue `3.3.4`

### ビルドツール

vite `4.3.9`

## プロジェクト作成について

開発がすぐに始められるように必要最低限のものはインストール済み

### 必要最低限インストールしたものについて

- コマンドラインツール(crete-vue)
  > コマンドラインツールを使用して、プロジェクトを作成  
  > プロジェクト作成コマンド
  >
  > ```bash
  > npm init vue@3
  > ```
  >
  > 上記のコマンド実行後、CLI で以下のようにプロジェクトの設定を行う
  >
  > ```bash
  > ---プロジェクト名の設定---
  > Project name: … projectName
  > ---TypeScriptを使用するか---
  > ✔ Add TypeScript? … Yes
  > ---JSXを使用するか---
  > ✔ Add JSX Support? …  Yes
  > ---ルーターを使用するか---
  > ✔ Add Vue Router for Single Page Application development? … Yes
  > ---piniaを使用すか---
  > ✔ Add Pinia for state management? …  Yes
  > ---ユニットテストを使用するか---
  > ✔ Add Vitest for Unit Testing? … No
  > ---E2Eテスト(システム全体を通したテスト)を使用するか---
  > ✔ Add an End-to-End Testing Solution? › No
  > ---EsLinst(静的解析ツール)を使用するか---
  > ✔ Add ESLint for code quality? … No
  > ```
- pinia
  > 状態管理をするためのもの  
  > ビルドツールでプロジェクト作成時、設定で追加すれば自動でインストールされる  
  > 詳しくは[pinia](https://pinia.vuejs.org/core-concepts/)の公式サイトへ
- router
  > ルーティングするためのもの  
  > ビルドツールでプロジェクト作成時、設定で追加すれば自動でインストールされる  
  > 詳しくは[vue](https://router.vuejs.org/guide/)の公式サイトへ

## 必要によってインストールすべきライブラリ

### 非同期通信ライブラリ `axios`

axios ライブラリを使用することでより簡単に非同期通信が可能になる

```bash
npm install axios
```

### フロントテストライブラリ `mock-adapter`

ユニットテストを行うまでは、mock を使用して擬似データを作成し開発を行う

```bash
npm -D install axios-mock-adapter
```

### UI フレームワーク `vuetify`

UI がより簡単に構築できる

```bash
npm install vutify
```

### pinia プラグイン `pinia-plugin-persistedstate`

ページのリロードで store のデータが消えてしまわないよう、store の状態管理を永続化したい時に使用

```bash
npm install pinia-plugin-persistedstate
```

### 日付フォーマット `day.js`

日付のフォーマットを詳細に設定したい時使用

```bash
npm install dayjs
```

## フォルダ構成

```bash
src
|
|__assets 画像とかもろもろのフォルダ
|
|__commons 　共通で使用するフォルダ helperとかaxiosフォルダとか
|
|__components コンポーネントフォルダ
|
|__constants 　定数フォルダ
|
|__mocks モックフォルダ
|
|__router ルーター
|
|__service API接続サービスフォルダ ※サービスの中に返却モデルを記載
|
|__stores ストアフォルダ
|
|__views view画面フォルダ
```

## 開発に必要なコマンドについて

### ライブラリのインストール

下記のコマンドを打つことで、package.json に記載してあるライブラリをインストールする。
新規で開発に入る際、または複数人で開発しており新しくライブラリを入れた際には、下記のコマンドを打つように

```bash
npm i
```

### デバック(ホットリロード有効)

デバックコマンドは以下に記載  
ホットリロードにより変更保存後、自動で更新される
コンポーネントの変更は、たまに聞かない時があるのでその時は、`ctr + r`で更新を

```bash
npm run dev
```
