import { Product, CategoryMeta } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    slug: 'kenon-epilator',
    name: 'ケノン 家庭用光美容器',
    brand: 'ケノン',
    category: 'epilator',
    price: 69800,
    originalPrice: 79800,
    rating: 4.6,
    reviewCount: 13200,
    imageUrl: '/images/placeholder.svg',
    affiliateUrls: {
      amazon: 'https://www.amazon.co.jp/s?k=ケノン',
      rakuten: 'https://search.rakuten.co.jp/search/mall/ケノン/',
      official: 'https://www.ke-non.com/',
    },
    catchCopy: '業界最大級300万発！日本製の安心品質',
    description:
      '家庭用脱毛器No.1ブランド。フラッシュ数300万発で全身ケアが長期間可能。顔・VIO・全身に対応し、コスパ最強の1台。',
    features: ['フラッシュ300万発', '全身・顔・VIO対応', '10段階照射レベル', '日本製'],
    pros: [
      '業界最大級のフラッシュ数で長期使用できる',
      '顔・全身・VIOまで幅広くケア可能',
      '日本製で品質・サポートが安心',
      '付属カートリッジ（脱毛＋美顔）がお得',
    ],
    cons: ['価格が高め（6万円台）', '重量が約900gでやや重い', 'コンセント式のみ（充電式ではない）'],
    specs: {
      照射方式: 'IPL（光）',
      フラッシュ数: '300万発',
      照射面積: '約9.15cm²',
      照射レベル: '10段階',
      重量: '約900g',
      電源: 'AC電源（コンセント）',
      保証期間: '1年',
    },
    rank: 1,
    isRecommended: true,
    badge: '総合No.1',
    articleSections: [
      {
        h2: 'ケノンを実際に3ヶ月使った正直な感想',
        paragraphs: [
          '購入前は「家庭用脱毛器って本当に効くの？」と半信半疑でした。サロン脱毛に月1万円以上かけていた私が、思い切ってケノンに乗り換えたのは子どもが生まれて外出が難しくなったから。結論から言うと、3ヶ月でわきの毛が明らかに薄くなり、現在は2〜3週間に1回の照射でほぼ気にならないレベルになっています。',
          '最初の1ヶ月は「変化なし？」と不安になりましたが、脱毛の仕組みを調べると「成長期の毛にしか効かないため、全部の毛に効果が出るまで2〜3ヶ月かかるのは普通」とわかり、焦らず続けることができました。2ヶ月目から明らかに毛が細くなり、量も減ってきた実感がありました。',
        ],
      },
      {
        h2: '月別レポート：ケノン使用開始から3ヶ月の変化',
        paragraphs: [
          '【1ヶ月目】まず全身の照射部位を確認しながら照射スタート。わき・ひざ下・腕を週1〜2回のペースで。正直この時期は見た目の変化はほぼなし。ただ、毛が抜けやすくなったような感覚はありました。照射後に軽い赤みが出ることもありましたが、翌日には引いていたので問題なし。',
          '【2ヶ月目】わきの毛が「あれ、少なくなった？」と感じ始めた時期。照射直後に毛が抜けることも増えてきました。ひざ下も触るとザラザラ感が明らかに減ってきました。この頃から毎週の照射が楽しみになってきました。',
          '【3ヶ月目】わきはほぼツルツル。毛が生えてきても以前より細く、色も薄い。ひざ下・腕も1〜2割程度まで毛量が減った印象。VIOは少し時間がかかりそうですが、確実に変化を感じています。',
        ],
        tip: '照射レベルは最初から高くしすぎないのがコツ。肌が慣れてきたらレベル7〜8に上げると効果を実感しやすくなります。',
      },
      {
        h2: '使い方のポイントと注意点',
        paragraphs: [
          '照射前の処理が一番大事です。毛を剃ってから照射しないと、毛が焦げて肌にダメージを与えることがあります。私は照射前日にシェービングして、翌日照射というサイクルに落ち着きました。',
          '照射後は保湿が必須。肌が乾燥しやすくなるので、いつもより丁寧に保湿しましょう。日焼けした肌への照射はNG（肌色センサーがあるため照射されないこともある）なので、夏場は日焼け対策を徹底することをおすすめします。',
        ],
        warning: '生理中・妊娠中・授乳中は使用を控えてください。また、日焼け直後や炎症のある肌への照射は避けましょう。',
      },
      {
        h2: 'ケノンがおすすめな人・おすすめしない人',
        paragraphs: [
          '【おすすめな人】サロンに通う時間がない主婦・働くママ / コスパを重視したい方（サロンより長期的にお得）/ 全身くまなくケアしたい方 / VIOまで自宅でケアしたい方 / 日本製にこだわりたい方',
          '【おすすめしない人】初期費用を抑えたい方（6万円台は高い） / 充電式でどこでも使いたい方（コンセント式のみ） / 結果をすぐに求める方（効果が出るまで2〜3ヶ月かかる） / 白髪・金髪など色素の薄い毛がメインの方（IPLは効きにくい）',
        ],
      },
      {
        h2: 'ケノン vs ブラウン シルクエキスパート：どっちがいい？',
        paragraphs: [
          'よく比較されるブラウン シルクエキスパートPro5との違いを正直にお伝えします。ブラウンはフラッシュ速度が速く、軽量で扱いやすいのが魅力。一方でフラッシュ数が40万発とケノンの約1/7しかなく、長期使用でコストが増えます（カートリッジ交換）。',
          'ケノンはフラッシュ数300万発で交換不要なのが大きな強み。ただし重くてコンセント必須なのでその点は注意。「長く使いたい・コスパ重視」ならケノン、「速さ・扱いやすさ重視」ならブラウン、という選び分けがしやすいです。私は結果としてケノンを選んで正解でした。',
        ],
      },
    ],
  },
  {
    id: '2',
    slug: 'braun-silk-expert-pro5',
    name: 'ブラウン シルクエキスパートPro5',
    brand: 'ブラウン',
    category: 'epilator',
    price: 54800,
    rating: 4.4,
    reviewCount: 8500,
    imageUrl: '/images/placeholder.svg',
    affiliateUrls: {
      amazon: 'https://www.amazon.co.jp/s?k=ブラウン+シルクエキスパート',
      rakuten: 'https://search.rakuten.co.jp/search/mall/シルクエキスパート/',
    },
    catchCopy: '肌色センサーで安全＆スピーディーな光美容',
    description:
      '独自の肌色センサーが照射レベルを自動調整。スキップ照射で全身が驚くほど速い。軽量385gで扱いやすい。',
    features: ['SensoAdapt™肌色センサー', 'スキップ照射', '防水設計（IPX7）', '軽量385g'],
    pros: [
      '肌色センサーで自動調整、安全に使える',
      '照射速度が速く時短できる',
      '軽量で扱いやすい',
      'IPX7防水でシャワー中も使用可',
    ],
    cons: ['フラッシュ数が少なめ（40万発）', '日本語サポートがやや弱い', 'VIO非対応'],
    specs: {
      照射方式: 'IPL（光）',
      フラッシュ数: '40万発',
      照射面積: '約3.5cm²',
      照射レベル: '自動＋手動12段階',
      重量: '約385g',
      電源: 'USB-C充電',
      保証期間: '2年',
    },
    rank: 2,
    badge: '軽量No.1',
  },
  {
    id: '3',
    slug: 'panasonic-ipl',
    name: 'パナソニック IPL美容器 ES-WP97',
    brand: 'パナソニック',
    category: 'epilator',
    price: 42800,
    rating: 4.2,
    reviewCount: 5200,
    imageUrl: '/images/placeholder.svg',
    affiliateUrls: {
      amazon: 'https://www.amazon.co.jp/s?k=パナソニック+IPL美容器',
      rakuten: 'https://search.rakuten.co.jp/search/mall/パナソニック+脱毛器/',
    },
    catchCopy: '初めての家庭用脱毛器に。パナソニックの安心品質',
    description:
      '国内大手メーカーの信頼感。初心者向けのシンプル操作で全身・顔に使えるエントリーモデル。',
    features: ['全身・顔に使用可', '3段階照射レベル', '防水設計', 'パナソニック正規品'],
    pros: ['パナソニックブランドで安心', 'シンプルで初心者に使いやすい', 'コンパクトで収納しやすい'],
    cons: ['照射レベルが3段階と少ない', 'フラッシュ数非公開', 'VIO非対応'],
    specs: {
      照射方式: 'IPL（光）',
      照射レベル: '3段階',
      防水: 'IPX7',
      重量: '約320g',
      電源: 'USB-C充電',
      保証期間: '1年',
    },
    rank: 3,
    badge: '初心者向け',
  },
  {
    id: '4',
    slug: 'yaman-photo-plus-ex',
    name: 'ヤーマン フォトプラスEX',
    brand: 'ヤーマン',
    category: 'face-device',
    price: 44000,
    originalPrice: 55000,
    rating: 4.5,
    reviewCount: 6800,
    imageUrl: '/images/placeholder.svg',
    affiliateUrls: {
      amazon: 'https://www.amazon.co.jp/s?k=ヤーマン+フォトプラスEX',
      rakuten: 'https://search.rakuten.co.jp/search/mall/ヤーマン+フォトプラス/',
      official: 'https://www.ya-man.com/',
    },
    catchCopy: '5つのモードで顔の悩みをまとめてケア',
    description:
      'RF・EMS・イオン導入・光美容など5つの機能を1台に集約。40代の総合フェイスケアに最適な多機能美顔器。',
    features: ['RF（ラジオ波）', 'EMS', 'イオン導入/導出', '光美容（LED）', 'クレンジング'],
    pros: [
      '5機能で全顔ケアが1台でできる',
      '公式アプリでパーソナルケアをサポート',
      '日本製で品質安心',
      'IPX6防水対応',
    ],
    cons: ['価格が高い（4万円台）', '各モードの使い分けに慣れが必要', 'ジェルが別途必要'],
    specs: {
      機能: 'RF / EMS / イオン導入・導出 / 光 / クレンジング',
      周波数: '1MHz（RF）',
      重量: '約200g',
      電源: 'USB充電',
      防水: 'IPX6',
      保証期間: '1年',
    },
    rank: 1,
    isRecommended: true,
    badge: '美顔器No.1',
  },
  {
    id: '5',
    slug: 'dyson-supersonic',
    name: 'ダイソン Supersonic ドライヤー',
    brand: 'ダイソン',
    category: 'hair-dryer',
    price: 55000,
    rating: 4.7,
    reviewCount: 15200,
    imageUrl: '/images/placeholder.svg',
    affiliateUrls: {
      amazon: 'https://www.amazon.co.jp/s?k=ダイソン+スーパーソニック',
      rakuten: 'https://search.rakuten.co.jp/search/mall/ダイソン+ドライヤー/',
      official: 'https://www.dyson.co.jp/',
    },
    catchCopy: '熱ダメージゼロ。速乾×艶髪を両立するプレミアム',
    description:
      '独自の温度制御で熱ダメージを最小化しながら速乾。くせ毛・傷みが気になる30・40代に支持No.1。',
    features: ['インテリジェント熱制御', '速乾モーター（110,000rpm）', 'マグネット式アタッチメント6種', '静音設計'],
    pros: [
      '速乾で毎朝の時短に貢献',
      '熱ダメージが少なく艶髪になる',
      '軽量（621g）で腕が疲れない',
      'アタッチメントが豊富でスタイリングも可',
    ],
    cons: ['価格が高い（5万円以上）', 'コンセント式のみ', 'バキューム式で慣れが必要'],
    specs: {
      電力: '1600W',
      重量: '約621g',
      風速: '約145km/h',
      熱設定: '4段階',
      風量設定: '3段階',
      保証期間: '2年',
    },
    rank: 1,
    isRecommended: true,
    badge: 'ヘアケアNo.1',
  },
  {
    id: '6',
    slug: 'panasonic-nanoe-dryer',
    name: 'パナソニック ナノケアドライヤー EH-NA0J',
    brand: 'パナソニック',
    category: 'hair-dryer',
    price: 22000,
    rating: 4.5,
    reviewCount: 21000,
    imageUrl: '/images/placeholder.svg',
    affiliateUrls: {
      amazon: 'https://www.amazon.co.jp/s?k=パナソニック+ナノケア+EH-NA0J',
      rakuten: 'https://search.rakuten.co.jp/search/mall/パナソニック+ナノケア+ドライヤー/',
    },
    catchCopy: 'ナノイーEXで髪のうるおいをキープ。コスパ最強',
    description:
      'パナソニック独自のナノイーEXが髪に水分補給しながら乾燥。ダイソンの半額以下でサロン品質を実現。',
    features: ['ナノイーEX搭載', 'ミネラルマイクロミスト', 'スカルプモード', 'ツインアタッチメント'],
    pros: [
      'コスパが良い（ダイソンの半額以下）',
      'うるおい効果で傷みを抑えながら乾燥',
      '国内メーカーで安心のサポート',
      '口コミ件数No.1の人気商品',
    ],
    cons: ['ダイソンより乾燥速度が遅い', 'やや重め（580g）', 'ノイズが少し大きい'],
    specs: {
      電力: '1200W',
      重量: '約580g',
      ナノイー: 'ナノイーEX',
      保証期間: '1年',
    },
    rank: 2,
    badge: 'コスパNo.1',
  },
];

export const categories: CategoryMeta[] = [
  { id: 'epilator', label: '脱毛器・光美容器', icon: '✨', desc: 'IPL・レーザー脱毛器', href: '/category/epilator' },
  { id: 'face-device', label: '美顔器・RF・EMS', icon: '💆', desc: 'リフトアップ・たるみケア', href: '/category/face-device' },
  { id: 'hair-dryer', label: 'ドライヤー', icon: '💨', desc: '髪質改善・速乾モデル', href: '/category/hair-dryer' },
  { id: 'skin-care', label: 'スキンケア家電', icon: '🌸', desc: '導入美容器・スチーマー', href: '/category/skin-care' },
];

export const getProductsByCategory = (cat: string) =>
  products.filter((p) => p.category === cat);

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getRecommendedProducts = () =>
  products.filter((p) => p.isRecommended);
