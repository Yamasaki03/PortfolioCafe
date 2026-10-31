# 路地珈琲 こはく(ROJI COFFEE KOHAKU)

京都・路地裏の町家にある自家焙煎コーヒー店を想定した、3ページ構成の制作サンプルです。
HTML / CSS / JavaScript のみで作っています(フレームワーク・ライブラリなし)。

> 架空の店舗を想定した制作サンプルです。

## 構成

```
.
├── index.html          トップ
├── menu/index.html     お品書き(メニュー)
├── access/index.html   アクセス
├── css/style.css       共通スタイル(デザイントークンは :root にまとめています)
├── js/main.js          スクロール出現・スマホ固定ボタン・画像の仮表示
├── favicon.svg
└── images/             写真の置き場所(下記)
```

## 画像の追加方法

下の表のファイル名で `images/` に置くだけで、そのまま表示されます。
画像がまだ無い枠には、ファイル名と比率が入った仮の枠が表示されます。

| ファイル | 使う場所 | 比率 | 推奨サイズ |
| --- | --- | --- | --- |
| `images/top/hero.jpg` | トップ:ファーストビュー(路地の奥に暖簾) | 横長・全面 | 1920×1280 以上 |
| `images/top/about.jpg` | トップ:ごあいさつ(焙煎機の手元) | 4:5 | 800×1000 |
| `images/top/recommend-blend.jpg` | トップ:おすすめ こはくブレンド | 1:1 | 600×600 |
| `images/top/recommend-ethiopia.jpg` | トップ:おすすめ エチオピア | 1:1 | 600×600 |
| `images/top/recommend-financier.jpg` | トップ:おすすめ フィナンシェ | 1:1 | 600×600 |
| `images/menu/hand-drip.jpg` | お品書き:冒頭の写真 | 16:7 | 1200×525 |
| `images/access/step-01.jpg` | アクセス①通り沿いの白い行灯(トップのアクセス欄でも使用) | 4:3 | 800×600 |
| `images/access/step-02.jpg` | アクセス②路地の入口 | 4:3 | 800×600 |
| `images/access/step-03.jpg` | アクセス③暖簾のかかった店先 | 4:3 | 800×600 |

- 比率が違っても枠に合わせて切り抜かれます(`object-fit: cover`)。
- ファイル名や拡張子(`.webp` など)を変える場合は、HTML の `src` も合わせて変更してください。
- 写真は彩度を少し下げ、暖色に寄せてそろえるとデザインになじみます。

## 差し替えが必要な箇所

- Instagram の URL(`https://www.instagram.com/` → アカウントのURL)と `[@アカウント名]`
- `[架空の住所]`、`[通り名]`、`[最寄り駅]から徒歩[○]分`
- 地図(`access/index.html` の iframe)と「地図で開く」ボタンのURL(現在は「京都市中京区」で検索)

## 確認方法

ファイルを直接ブラウザで開いても表示できます。ローカルサーバーで確認する場合:

```bash
python3 -m http.server 8000
```
