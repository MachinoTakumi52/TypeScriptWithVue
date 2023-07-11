# vue(TypeScript)開発するためのテンプレート
## 開発環境(docker使用)
### 実行環境
node 18.13.0

### 言語
typeScript 5.0.4

### フレームワーク
vue 3.3.4

### ビルドツール
vite 4.3.9

## プロジェクト作成
### プロジェクト作成コマンド
```bash 
npm init vue@3
```

## 必要によってインストールすべきライブラリ
### 非同期通信ライブラリ axios
```bash 
npm install axios
```
### フロントテストライブラリ mock-adapter
```bash 
npm -D install axios-mock-adapter
```
### UIフレームワーク vuetify
```bash 
npm install vutify
```
### piniaプラグイン pinia-plugin-persistedstate
ページのリロードでstoreのデータが消えてしまわないよう、storeの状態管理を永続化したい時に使用
```bash 
npm install pinia-plugin-persistedstate
```
### 日付フォーマット
```bash 
npm install dayjs
```

## ライブラリのインストール
```bash 
npm i
```

## デバック(ホットリロード有効)
```bash
npm run dev
```

## フォルダ構成
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

