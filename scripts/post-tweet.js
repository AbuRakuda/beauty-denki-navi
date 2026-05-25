const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const BASE = 'https://beauty-denki-navi.vercel.app';

const tweets = [
  `家庭用脱毛器って本当に効くの？と思って3ヶ月使い続けた結果→脇の毛がほぼ気にならないレベルになりました。サロン代月1万円が浮いた。\n${BASE}/column/epilator-effect-timeline`,
  `ケノンとブラウンで迷ってる方へ。両方使った結論→コスパ重視ならケノン・楽に使いたいならブラウン。詳しい違いをまとめました👇\n${BASE}/column/kenon-vs-braun-comparison`,
  `30代になってからドライヤー変えたら髪のパサつきが明らかに減った。ダイソンとナノケアを1年使い比べた正直レビュー👇\n${BASE}/column/hair-dryer-for-30s-women`,
  `脱毛器の効果が出ない人の共通点3つ\n①照射間隔が空きすぎ\n②出力が低すぎ\n③毛を抜いている（剃るのはOK）\n正しい使い方をするだけで全然変わります👇\n${BASE}/column/epilator-effect-timeline`,
  `40代のほうれい線・たるみに効果的な美顔器の選び方。RFとEMSの違いから実際に使ったレビューまでまとめました👇\n${BASE}/column/face-device-for-40s`,
  `【脱毛器コスパ比較】\nケノン：約7万円・300万発\nブラウン：約4.5万円\nパナソニック：約3万円台\n\n長く使うならケノン一択。家族で使えば1発あたり数円以下。\n${BASE}/ranking`,
  `サロン脱毛に50万円使うか、家庭用脱毛器に7万円使うか。私は後者を選んで3年経ちます。通う手間がないのが一番のメリット。\n${BASE}/reviews/kenon-epilator`,
  `ダイソンのドライヤーが高いのには理由がある。温度を自動制御するから熱ダメージが圧倒的に少ない。「毎日使うもの」への投資は惜しまない派です。\n${BASE}/reviews/dyson-supersonic`,
  `美顔器を2ヶ月で諦めた過去の私に言いたい。肌のターンオーバーは28〜40日かかるから、最低3ヶ月は続けないと効果は出ない。継続が全て。\n${BASE}/column/face-device-for-40s`,
  `脱毛器を選ぶとき一番大事なのはフラッシュ数（照射回数）。ケノンが人気な理由は300万発という圧倒的なコスパ。\n${BASE}/column/home-epilator-comparison-2025`,
  `家庭用脱毛器とサロン脱毛、本当にどっちがお得？初期費用・ランニングコスト・効果を全部比較しました。\n${BASE}/column/home-epilator-comparison-2025`,
  `ブラウンのシルクエキスパートPro5、肌色センサーが優秀すぎる。日焼けした肌でも自動で出力を下げてくれるから安心して使えます。\n${BASE}/reviews/braun-silk-expert-pro5`,
  `パナソニックの光美容器、シンプルな操作が魅力。美容家電に慣れていない方の最初の1台として最適です。\n${BASE}/reviews/panasonic-ipl`,
  `ヤーマンのフォトプラスEX、RF・EMS・光美容の5機能搭載。40代の複合的な悩みに一台で対応できるのが嬉しい。\n${BASE}/reviews/yaman-photo-plus-ex`,
  `パナソニックのナノケア、乾かしながら保湿してくれるのが他にない強み。カラーで傷んだ髪に特におすすめ。\n${BASE}/reviews/panasonic-nanoe-dryer`,
  `脱毛器を使う前に必ずシェービングを。産毛が残っていると光が散乱して効果が半減します。これ意外と知らない人多い。\n${BASE}/column/epilator-effect-timeline`,
  `美顔器のRFとEMSの違いわかりますか？\nRF→コラーゲン生成・たるみ改善\nEMS→筋肉刺激・フェイスライン引き締め\n40代にはRF搭載モデルがおすすめ。\n${BASE}/column/face-device-for-40s`,
  `ドライヤーは「風量が強い=髪に優しい」。素早く乾かすほど熱を当てる時間が短くなるから。安いドライヤーほど時間がかかって傷む。\n${BASE}/column/hair-dryer-for-30s-women`,
  `脱毛器を使い始めて1ヶ月は変化なしが普通。毛周期の関係で効果が出るまで2〜3ヶ月かかります。諦めないで。\n${BASE}/column/epilator-effect-timeline`,
  `ケノンを3ヶ月使ったリアルな口コミ。良かった点・残念だった点、正直に全部書きました。\n${BASE}/reviews/kenon-epilator`,
  `ブラウンのコードレス脱毛器、お風呂上がりにリビングで使えるのが地味に便利。コンセントを探さなくていいのがストレスフリー。\n${BASE}/reviews/braun-silk-expert-pro5`,
  `美容家電に迷ったらまずランキングを見て。脱毛器・美顔器・ドライヤーを実際に購入して比較した結果を公開中。\n${BASE}/ranking`,
  `ダイソン スーパーソニック、価格が高くて躊躇してたけど買って正解だった。毎日使うものだから1日あたりのコストで考えると意外と安い。\n${BASE}/reviews/dyson-supersonic`,
  `脱毛器の照射面積が大きいほど全身ケアが楽になる。脚や背中など広い部位が多い方はヘッドの大きさをチェックして。\n${BASE}/column/home-epilator-comparison-2025`,
  `30代から美容家電を使い始めた理由→時間がなくてサロンに通えなくなったから。家で完結できる美容ルーティンに変えて後悔ゼロ。\n${BASE}/ranking`,
  `ケノン vs ブラウン、価格差は約2〜3万円。その差をどう考えるかで選ぶべき機種が変わります。詳しく解説しました。\n${BASE}/column/kenon-vs-braun-comparison`,
  `美顔器は毎日使わなくてもOK。週3〜4回でも継続すれば効果が出ます。完璧を目指さないことが長続きのコツ。\n${BASE}/column/face-device-for-40s`,
  `ドライヤー前のタオルドライが超重要。水分をしっかり拭き取るだけで乾かす時間が大幅に短縮→熱ダメージが減る。\n${BASE}/column/hair-dryer-for-30s-women`,
  `家庭用脱毛器で「効果なかった」という人の多くが、出力を上げていないケース。最初は低めでも慣れたら徐々に上げるのが正解。\n${BASE}/column/epilator-effect-timeline`,
  `美容家電の選び方で迷ったら、まず「自分の一番の悩み」を明確にすること。脱毛・たるみ・乾燥、悩みによって最適な機種が全然違います。\n${BASE}/ranking`,
];

const dayOfYear = Math.floor(
  (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
);
const tweet = tweets[dayOfYear % tweets.length];

async function main() {
  try {
    const result = await client.v2.tweet(tweet);
    console.log('Tweet posted successfully:', result.data.id);
    console.log('Content:', tweet.slice(0, 50) + '...');
  } catch (error) {
    console.error('Failed to post tweet:', error);
    process.exit(1);
  }
}

main();
