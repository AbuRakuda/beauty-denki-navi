/**
 * アフィリエイトリンク一元管理
 *
 * 【使い方】
 * 1. ASP審査が通ったら下記のURLを実際のアフィリリンクに置き換える
 * 2. Amazonは associate タグを末尾に付与（例: ?tag=yoursite-22）
 * 3. A8.netはパラメータ付きURLをそのまま貼る
 */

export const AMAZON_TAG = 'beautynavi22-22'; // Amazonアソシエイト タグ

export function amazonUrl(asin: string): string {
  return `https://www.amazon.co.jp/dp/${asin}?tag=${AMAZON_TAG}`;
}

export function rakutenUrl(itemCode: string): string {
  return `https://item.rakuten.co.jp/${itemCode}`;
}

// 商品ごとのアフィリURL（審査通過後に実URLへ置き換え）
export const AFFILIATE_URLS = {
  kenon: {
    amazon: amazonUrl('B091F7BL35'),
    rakuten: rakutenUrl('kenon/kenon-set'),
    official: 'https://www.ke-non.com/',
    a8: '', // A8.net審査後に追加
  },
  braunSilkExpert: {
    amazon: amazonUrl('B09TFGV11Z'),
    rakuten: rakutenUrl('braun/silk-expert-pro5'),
    official: 'https://www.braun.com/ja-jp/',
    a8: '',
  },
  panasonicIpl: {
    amazon: amazonUrl('B0DT2W8QXZ'),
    rakuten: rakutenUrl('panasonic/es-wp97'),
    official: 'https://panasonic.net/cns/beauty/',
    a8: '',
  },
  yamanPhotoPlus: {
    amazon: amazonUrl('B0FM6N6PDK'),
    rakuten: rakutenUrl('yaman/photo-plus-ex'),
    official: 'https://www.ya-man.com/',
    a8: '',
  },
  dysonSupersonic: {
    amazon: amazonUrl('B0FLPRRH5D'),
    rakuten: rakutenUrl('dyson/supersonic'),
    official: 'https://www.dyson.co.jp/',
    a8: '',
  },
  panasonicNanoe: {
    amazon: amazonUrl('B0B72HZHLG'),
    rakuten: rakutenUrl('panasonic/eh-na0j'),
    official: 'https://panasonic.net/cns/beauty/',
    a8: '',
  },
} as const;
