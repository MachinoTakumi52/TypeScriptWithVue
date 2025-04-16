#!/bin/sh

# プロジェクトルートディレクトリ
PROJECT_ROOT_DIR="/workspace"

# テンプレートディレクトリ
TEMPLATE_DIR="$PROJECT_ROOT_DIR/.createProject/template"

# プロジェクト設定
echo "プロジェクトの名前を教えてください"
read -p "プロジェクト名: " PROJECT_NAME

# プロジェクト名が空欄の場合はエラーをだす
if [ -z "$PROJECT_NAME" ]; then
    echo "プロジェクト名が空欄です。もう一度スクリプトを実行してください。"
    exit 1
fi

# プロジェクトの作成
npm create vue@3 "$PROJECT_NAME"

# プロジェクトディレクトリ
PROJECT_DIR="$PROJECT_ROOT_DIR/$PROJECT_NAME"

# プロジェクトディレクトリ移動
cd "$PROJECT_DIR"

# 必要なライブラリを入れる
npm install pinia-plugin-persistedstate

USE_AXIOS="n"
USE_MOCK="n"
USE_VUETIFY="n"

# api連携にaxiosを使用するかを聞く
echo "axiosを使用しますか？(y/n)"
read -p "y/n: " USE_AXIOS
if [ "$USE_AXIOS" = "y" ]; then
    echo "axiosをインストールします"
    npm install axios

    # mockを使用するかを聞く
    echo "mockを使用しますか？(y/n)"
    read -p "y/n: " USE_MOCK
    if [ "$USE_MOCK" = "y" ]; then
        echo "mockをインストールします"
        npm install --save-dev axios-mock-adapter
    fi
fi

# vuetifyを使用するかを聞く
echo "vuetifyを使用しますか？(y/n)"
read -p "y/n: " USE_VUETIFY
if [ "$USE_VUETIFY" = "y" ]; then
    echo "vuetifyをインストールします"
    npm install vuetify
fi

PROJECT_SRC_DIR="/$PROJECT_DIR/src"

# いらないファイルの削除
rm -rf "$PROJECT_SRC_DIR"/assets/*
rm -rf "$PROJECT_SRC_DIR"/components/*
rm -rf "$PROJECT_SRC_DIR"/router/*
rm -rf "$PROJECT_SRC_DIR"/stores/*
rm -rf "$PROJECT_SRC_DIR"/views/*
rm -rf "$PROJECT_SRC_DIR"/App.vue
rm -rf "$PROJECT_SRC_DIR"/main.ts
rm -rf "$PROJECT_SRC_DIR"/env.d.ts

# サンプルファイルの作成 components
cp "$TEMPLATE_DIR"/SampleComponent.vue "$PROJECT_SRC_DIR"/components/
# サンプルファイルの作成 router
cp "$TEMPLATE_DIR"/index.ts "$PROJECT_SRC_DIR"/router/
# サンプルファイルの作成 stores
cp "$TEMPLATE_DIR"/global.ts "$PROJECT_SRC_DIR"/stores/
# サンプルファイルの作成 views
cp "$TEMPLATE_DIR"/Home.vue "$PROJECT_SRC_DIR"/views/
cp "$TEMPLATE_DIR"/Sample.vue "$PROJECT_SRC_DIR"/views/
# サンプルファイルの作成 services
mkdir "$PROJECT_SRC_DIR"/services
cp "$TEMPLATE_DIR"/sampleService.ts "$PROJECT_SRC_DIR"/services/
# サンプルファイルの作成 utils
mkdir "$PROJECT_SRC_DIR"/utils
cp "$TEMPLATE_DIR"/errorHandler.ts "$PROJECT_SRC_DIR"/utils/
cp "$TEMPLATE_DIR"/consts.ts "$PROJECT_SRC_DIR"/utils/
# サンプルファイルの作成 main.ts
cp "$TEMPLATE_DIR"/main.ts "$PROJECT_SRC_DIR"/
# サンプルファイルの作成 App.vue
cp "$TEMPLATE_DIR"/App.vue "$PROJECT_SRC_DIR"/

if [ "$USE_AXIOS" = "y" ]; then
    # サンプルファイルの作成 http通信
    cp "$TEMPLATE_DIR"/http.ts "$PROJECT_SRC_DIR"/utils/
    
    # サンプルファイルの作成 mocks
    if [ "$USE_MOCK" = "y" ]; then
        cp "$TEMPLATE_DIR"/mock.ts "$PROJECT_SRC_DIR"/stores/
        mkdir "$PROJECT_SRC_DIR"/mocks
        cp "$TEMPLATE_DIR"/sampleServiceMock.ts "$PROJECT_SRC_DIR"/mocks/
        sed -i 's|// import { httpJson } from "./utils/http";|import { httpJson } from "./utils/http";|' "$PROJECT_SRC_DIR/main.ts"
        sed -i 's|// import { sampleServiceMock } from "./mocks/sampleServiceMock";|import { sampleServiceMock } from "./mocks/sampleServiceMock";|' "$PROJECT_SRC_DIR/main.ts"
        sed -i 's|// import { useMockStore } from "./stores/mock";|import { useMockStore } from "./stores/mock";|' "$PROJECT_SRC_DIR/main.ts"
        sed -i 's|// import MockAdapter from "axios-mock-adapter";|import MockAdapter from "axios-mock-adapter";|' "$PROJECT_SRC_DIR/main.ts"
        sed -i 's|// if (import.meta.env.VITE_IS_USED_MOCK === true) {|if (import.meta.env.VITE_IS_USED_MOCK === true) {|' "$PROJECT_SRC_DIR/main.ts"
        sed -i 's|//   const mockStore = useMockStore();|  const mockStore = useMockStore();|' "$PROJECT_SRC_DIR/main.ts"
        sed -i 's|//   mockStore.mock = new MockAdapter(httpJson, { delayResponse: 200 });|  mockStore.mock = new MockAdapter(httpJson, { delayResponse: 200 });|' "$PROJECT_SRC_DIR/main.ts"
        sed -i 's|//   sampleServiceMock();|  sampleServiceMock();|' "$PROJECT_SRC_DIR/main.ts"
        sed -i 's|// }|}|' "$PROJECT_SRC_DIR/main.ts"
    fi
fi

# サンプルファイルの作成 vuetify
if [ "$USE_VUETIFY" = "y" ]; then
    cp -r "$TEMPLATE_DIR"/vuetify "$PROJECT_SRC_DIR"/
    sed -i 's|// import vuetify from "@/vuetify/index";|import vuetify from "@/vuetify/index";|' "$PROJECT_SRC_DIR/main.ts"
    sed -i 's|// app.use(vuetify);|app.use(vuetify);|' "$PROJECT_SRC_DIR/main.ts"
fi

# サンプルファイルの作成 env作成
cp "$TEMPLATE_DIR"/.env.development "$PROJECT_SRC_DIR"/
cp "$TEMPLATE_DIR"/.env.release "$PROJECT_SRC_DIR"/
cp "$TEMPLATE_DIR"/env.d.ts "$PROJECT_SRC_DIR"/

echo "プロジェクトの作成が完了しました"
echo "------------------------------------"
echo "以下のコマンドでプロジェクトを起動できます"
echo "cd $PROJECT_NAME"
echo "npm install"
echo "npm run dev"