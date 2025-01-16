# vue(TypeScript)開発にあたって
## 開発環境

### DockerImage

linux(dedian ベース)：`node:22.12.0-bookworm-slim`

### 実行環境

node：`22.12.0`

### 言語

typeScript：`5.6.3`

### フレームワーク

vue：`3.5.13`

### ビルドツール

vite：`6.0.5`

## プロジェクト作成について

開発がすぐに始められるように必要最低限のものはインストール済み。  
TODO:フォルダ構造作成までやってあげる(shellバッチで)
### 必要最低限インストールしたものについて

- コマンドラインツールを使用してプロジェクトを作成  
  プロジェクト作成コマンド

  ```bash
  npm init vue@3
  ```

  上記のコマンド実行後、CLI で以下のようにプロジェクトの設定を行う

   ```bash
   ---プロジェクト名の設定---
   Project name: … projectName
   ---TypeScriptを使用するか---
   ✔ Add TypeScript? … Yes
   ---JSXを使用するか---
   ✔ Add JSX Support? …  Yes
   ---ルーターを使用するか---
   ✔ Add Vue Router for Single Page Application development? … Yes
   ---piniaを使用すか---
   ✔ Add Pinia for state management? …  Yes
   ---ユニットテストを使用するか---
   ✔ Add Vitest for Unit Testing? … No
   ---E2Eテスト(システム全体を通したテスト)を使用するか---
   ✔ Add an End-to-End Testing Solution? › No
   ---EsLinst(静的解析ツール)を使用するか---
   ✔ Add ESLint for code quality? … No
   ```
- pinia  
  状態管理をするためのもの  
  ビルドツールでプロジェクト作成時、設定で追加すれば自動でインストールされる  
  詳しくは[pinia](https://pinia.vuejs.org/core-concepts/)の公式サイトへ
- router  
  ルーティングするためのもの  
  ビルドツールでプロジェクト作成時、設定で追加すれば自動でインストールされる  
  詳しくは[vue](https://router.vuejs.org/guide/)の公式サイトへ

## インストールライブラリ

### 非同期通信ライブラリ `axios`

axios ライブラリを使用することでより簡単に非同期通信が可能になる。

```bash
npm install axios
```

### フロントテストライブラリ `mock-adapter`

ユニットテストを行うまでは、mock を使用して擬似データを作成し開発を行う。

```bash
npm -D install axios-mock-adapter
```

### UI フレームワーク `vuetify`

UI がより簡単に構築できる。

```bash
npm install vutify
```

### pinia プラグイン `pinia-plugin-persistedstate`

ページのリロードで store のデータが消えてしまわないよう、store の状態管理を永続化したい時に使用。

```bash
npm install pinia-plugin-persistedstate
```

## フォルダ構成

```bash
src
|
|__assets 画像とかもろもろのフォルダ
|
|__utils 　共通で使用するフォルダ helperとかaxiosフォルダ定数とか
|
|__components コンポーネントフォルダ
|
|__router 画面のルーティングをするファイルを格納
|
|__service API接続サービスフォルダ ※サービスの中に返却モデルを記載
|
|__stores ローカルストレージフォルダ
|
|__views view画面フォルダ
|
|__App.vue ルートコンポーネント
|
|__main.ts エントリーファイル
|
|__vuetify vuetify設定フォルダ
|  |
|  |__rules コンポーネント入力値検証ファイル格納フォルダ
|  |
|  |__index.ts vuetify設定フォルダ
|
|__types 型定義フォルダ
```
## 開発のいろは
### 開発ルール

開発ルールは、[フロントエンドコーディング規約](https://zenn.dev/takumi_machino/articles/typescript-vue-vuetify)を参照。

## 開発からデプロイまでの流れ

### コンテナを立ち上げる
vscodeでプロジェクトを開く  
`コンテナで再度開く`を選択してコンテナを立ち上げる
vscode 左下をクリックしたら出てくる

または、docker ファイルが存在するディレクトリを vscode で開いた時、右下に`コンテナで開く`が出てくるので選択して
コンテナを立ち上げる

### ライブラリのインストール

下記のコマンドを打つことで、package.json に記載してあるライブラリをインストールする。  
新規で開発に入る際、または複数人で開発しており新しくライブラリを入れた際には、下記のコマンドを打つように  
ライブラリを追加した際は、[インストールライブラリ](#インストールライブラリ)に追加する。

```bash
npm i
```

### デバッグ(ホットリロード有効)

デバッグコマンドは以下に記載。  
ホットリロードにより変更保存後、自動で更新される。  
デバックポイントは、検索エンジンの検証機能から  
コンポーネントの変更は、たまに聞かない時があるのでその時は、`ctr + r`で更新をコンポーネントの新規追加時、別画面でインポートする際に見つからないことがあるので、コマンドパレットから「Reload windows」。

```bash
npm run dev
```

### デプロイ
下記コマンドでビルド。  
`dist`フォルダにファイルが生成されるためこれをプラットフォームに配置。
```bash
npm run build
```
