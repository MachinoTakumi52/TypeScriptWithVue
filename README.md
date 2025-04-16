# vue(TypeScript)開発にあたって

## プロジェクト作成について

### Node version 設定

devcontainer → docker → Dockerfile 内「debian ベース Node 設定」に使用したいバージョンを設定しコンテナを起動

```Dockerfile
  # debianベース Node設定
  FROM node:22.14-bookworm-slim
```

### シェル実行

ターミナルを開き、bash から下記コマンドを実行

```sh
/workspace/.createProject/newVueSolution.sh
```

※実行権限がなく実行できない時は、以下のコマンドを実行

```sh
chmod +x /workspace/.createProject/newVueSolution.sh
```

シェル実行後、プロジェクトの名前を聞かれるので入力

```sh
プロジェクトの名前を教えてください
プロジェクト名:
```

インストールするパッケージが聞かれるため`TypeScript`、`Router`、`Pinia`を選択

```sh
┌  Vue.js - The Progressive JavaScript Framework
│
◆  Select features to include in your project: (↑/↓ to navigate, space to select, a to toggle all, enter to confirm)
│  ◼ TypeScript
│  ◻ JSX Support
│  ◼ Router (SPA development)
│  ◼ Pinia (state management)
│  ◻ Vitest (unit testing)
│  ◻ End-to-End Testing
│  ◻ ESLint (error prevention)
│  ◻ Prettier (code formatting)
└
```

http 通信を使用する場合は、`y`を選択

```sh
axiosを使用しますか？(y/n)
y/n: y
```

mock を使用する場合は、`y`を選択

```sh
mockを使用しますか？(y/n)
y/n: y
```

vuetify を入れる場合は、`y`を選択

```sh
vuetifyを使用しますか？(y/n)
y/n: y
```

### ウィンドの再読み込み

下記のショートカットからコマンドパレットを開き「reload Window」を入力し「開発者：ウィンドウの再読み込み」を選択

```
ctrl + shift + P
```

## インストールライブラリ

### 状態管理ライブラリ `pinia`

状態管理をするためのもの  
 ビルドツールでプロジェクト作成時、設定で追加すれば自動でインストールされる  
 詳しくは[pinia](https://pinia.vuejs.org/core-concepts/)の公式サイトへ

### ルーティングライブラリ `router`

ルーティングするためのもの  
 ビルドツールでプロジェクト作成時、設定で追加すれば自動でインストールされる  
 詳しくは[vue](https://router.vuejs.org/guide/)の公式サイトへ

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

## ライブラリ選定サイト

### npmjs

ノードのパッケージの検索が可能  
基本はここから探すのがベスト  
https://www.npmjs.com/

### npm trends

ライブラリのトレンドが比較できるサイト  
ライブラリ選定の時に使える  
https://npmtrends.com/

### packagephobia

パッケージのサイズを確認できる  
https://packagephobia.com/

### npmgraph

パッケージの依存関係をみれる  
https://npmgraph.js.org/

### cdn.js

js の cdn について検索できる  
https://cdnjs.com/

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

vscode でプロジェクトを開く  
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
