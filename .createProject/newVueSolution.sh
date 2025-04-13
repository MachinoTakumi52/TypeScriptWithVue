#!/bin/sh

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

# TODO:必要なライブラリを入れる

# TODO:必要なプロジェクトフォルダの作成

# TODO:サンプルファイルの作成

# TODO:envやgitignoreの作成

