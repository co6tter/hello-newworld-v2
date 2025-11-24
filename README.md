# hello-newworld-v2

## Overview

Webエンジニアのポートフォリオサイトです。サービス紹介、実績紹介、制作の流れなどを掲載した静的HTMLサイトです。

主な機能:
- レスポンシブデザイン対応（スマートフォン、タブレット、PC）
- ハンバーガーメニュー
- スムーススクロール
- セクション別コンテンツ表示

## Tech Stack

- **HTML5** - セマンティックなマークアップ
- **CSS3 / Sass** - スタイリング（SCSS記法）
- **JavaScript** - インタラクション実装
- **jQuery** - DOM操作とイベント処理
- **Google Fonts** - Webフォント（Noto Sans JP, Oswald）
- **GitHub Actions** - 自動デプロイ
- **GitHub Pages** - ホスティング

## Setup

1. リポジトリをクローン:
```bash
git clone https://github.com/co6tter/hello-newworld-v2.git
cd hello-newworld-v2
```

2. ブラウザで [index.html](index.html) を開いて表示を確認

### Sassを使用する場合

Sassファイルを編集する場合は、以下の手順でコンパイルしてください:

```bash
# Sassをインストール（未インストールの場合）
npm install -g sass

# Sassをコンパイル
sass sass/style.scss css/style.css

# 監視モード（ファイル変更を自動検知）
sass --watch sass/style.scss:css/style.css
```

## Usage

### ローカル環境での確認

ブラウザで [index.html](index.html) を直接開くか、ローカルサーバーを起動して確認できます。

```bash
# Python 3の場合
python -m http.server 8000

# Node.jsのhttp-serverを使う場合
npx http-server
```

### デプロイ

`main` ブランチへのプッシュで、GitHub Actionsが自動的にGitHub Pagesへデプロイします。

```bash
git add .
git commit -m "Update content"
git push origin main
```

## Directory Structure

```
.
├── index.html              # メインHTMLファイル
├── css/
│   └── style.css          # コンパイル済みCSS
├── sass/
│   ├── style.scss         # メインSassファイル
│   ├── _breakpoints.scss  # ブレークポイント設定
│   └── _color.scss        # カラー変数
├── js/
│   └── index.js           # JavaScriptファイル
├── img/                   # 画像ファイル
│   └── sp/               # スマートフォン用画像
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actionsデプロイ設定
├── favicon.ico            # ファビコン
├── apple-touch-icon.png   # Apple用アイコン
├── site.webmanifest       # Webマニフェスト
└── README.md             # このファイル
```

## License

This repository is for personal/private use only.
