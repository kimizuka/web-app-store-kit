web-app-store
====

## 説明
iOS用のウェブアプリストアの雛形です。
Safariでアクセスした際は、ホーム画面に追加を促すストアページを表示（※1）し、
ホーム画面からアクセスした際はアプリを表示します。
また、ホーム画面に追加後、1度でも起動すれば2度目以降はオフラインでも動作します。

※1 iOS以外からのアクセスではストアを表示せずにアプリを表示します。


## サンプル
https://kimizuka.github.io/web-app-store/example/
https://kimizuka.github.io/web-app-store/


## 開発に必要なもの
- Sass ※ CSSを自前で書く気概があれば必要ありません。
- Compass ※ CSSを自前で書く気概があれば必要ありません。


## ファイル構成

- `README.md`
  - 開発のいろはが記述してあります（このファイルです）。
- `app.appcache`
  - キャッシュするファイルを記述します。
- `config.rb`
  - compassの設定を記述します。
- `index.html`
  - #store内にストア、#app内にアプリで表示したいものをマークアップします。
- `_sass/`
  - scssファイルが収納されています。基本的には_setting.scssと_stage.scssを編集すればOKです。
- `css/main.css`
  - コンパイルされたcssです。直接編集することはありません。
- `example/`
  - 例としてリフティングアプリがはいってます。
- `img/`
  - `app/`
    - `icon.png`
      - ホーム画面に表示されるアイコンです。
    - `splash-landscape.png`
      - 横向きの起動画面です
    - `splash.png`
      - 起動画面です
  - `resource/`
    - アプリで使用する画像置き場を想定しています。
  - `screenshot/`
    - ストアに表示するスクリーンショット置き場です。
  - `web/`
    - favicon.ico
      - ファビコンです
    - ogp.png
      - OG画像です。
- `js/`
  - JavaScript置き場です。基本的にはapp.jsとstore.jsを編集すればOKです。
