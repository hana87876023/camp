import { Product } from '@/types'

export const mockProducts: Product[] = [
  {
    id: 'tent-001',
    name: 'アルパイン ドームテント 2人用',
    slug: 'alpine-dome-tent-2p',
    description: '軽量で設営が簡単な2人用ドームテント。4シーズン対応の高品質素材を使用し、悪天候でも安心してご使用いただけます。',
    price: 29800,
    comparePrice: 35000,
    images: [
      'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    category: {
      id: 'tents',
      name: 'テント・シェルター',
      slug: 'tents',
      description: 'キャンプ用テント各種',
      image: '',
      subcategories: [],
      isActive: true,
      sortOrder: 1
    },
    subcategory: 'ドームテント',
    brand: 'Mountain Gear',
    sku: 'MG-TENT-001',
    stock: 15,
    variants: [
      {
        id: 'tent-001-orange',
        name: 'カラー',
        value: 'オレンジ',
        type: 'color',
        stock: 8,
        isDefault: true
      },
      {
        id: 'tent-001-green',
        name: 'カラー',
        value: 'グリーン',
        type: 'color',
        stock: 7
      }
    ],
    features: [
      '軽量設計（総重量2.8kg）',
      '簡単設営（約5分）',
      '防水性能3000mm',
      '4シーズン対応'
    ],
    specifications: {
      '重量': '2.8kg',
      'サイズ': '220 x 130 x 100cm',
      '収納サイズ': '55 x 15cm',
      '定員': '2人',
      '素材': 'リップストップナイロン',
      '防水性': '3000mm'
    },
    reviews: [],
    rating: 4.5,
    reviewCount: 28,
    tags: ['軽量', '防水', '4シーズン', '設営簡単'],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    isActive: true,
    isFeatured: true
  },
  {
    id: 'sleeping-bag-001',
    name: 'プレミアム マミー型 シュラフ',
    slug: 'premium-mummy-sleeping-bag',
    description: '高品質ダウンを使用したマミー型シュラフ。-10°Cまで対応で、厳しい環境でも快適な睡眠を提供します。',
    price: 24800,
    comparePrice: 30000,
    images: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    category: {
      id: 'sleeping',
      name: '寝具・リラックス',
      slug: 'sleeping',
      description: 'キャンプ用寝具',
      image: '',
      subcategories: [],
      isActive: true,
      sortOrder: 2
    },
    subcategory: 'シュラフ',
    brand: 'Alpine Pro',
    sku: 'AP-SB-001',
    stock: 20,
    variants: [
      {
        id: 'sb-001-navy',
        name: 'カラー',
        value: 'ネイビー',
        type: 'color',
        stock: 12,
        isDefault: true
      },
      {
        id: 'sb-001-red',
        name: 'カラー',
        value: 'レッド',
        type: 'color',
        stock: 8
      }
    ],
    features: [
      '高品質ダウン使用',
      '-10°C対応',
      '軽量コンパクト',
      '撥水加工'
    ],
    specifications: {
      '重量': '1.2kg',
      'サイズ': '210 x 80cm',
      '収納サイズ': '35 x 20cm',
      '対応温度': '-10°C',
      '中綿': '700フィルパワーダウン',
      '表地': 'ナイロン20D'
    },
    reviews: [],
    rating: 4.7,
    reviewCount: 42,
    tags: ['ダウン', '軽量', '防寒', 'コンパクト'],
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
    isActive: true,
    isFeatured: true
  },
  {
    id: 'stove-001',
    name: 'ポータブル バーナー ストーブ',
    slug: 'portable-burner-stove',
    description: '軽量で持ち運びやすいポータブルバーナー。強力な火力で素早く調理できます。風防付きで屋外での使用も安心。',
    price: 8800,
    images: [
      'https://images.unsplash.com/photo-1544966503-7cc36a08d5c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    category: {
      id: 'cooking',
      name: '調理・キッチン',
      slug: 'cooking',
      description: 'キャンプ用調理器具',
      image: '',
      subcategories: [],
      isActive: true,
      sortOrder: 3
    },
    subcategory: 'バーナー',
    brand: 'Outdoor Chef',
    sku: 'OC-ST-001',
    stock: 35,
    variants: [
      {
        id: 'stove-001-silver',
        name: 'カラー',
        value: 'シルバー',
        type: 'color',
        stock: 35,
        isDefault: true
      }
    ],
    features: [
      '軽量設計（320g）',
      '強力火力3200W',
      '風防付き',
      '簡単点火'
    ],
    specifications: {
      '重量': '320g',
      'サイズ': '11 x 11 x 9cm',
      '火力': '3200W',
      '燃料': 'CB缶',
      '燃焼時間': '約60分',
      '素材': 'アルミニウム合金'
    },
    reviews: [],
    rating: 4.3,
    reviewCount: 15,
    tags: ['軽量', '高火力', '風防', 'CB缶'],
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-08'),
    isActive: true,
    isFeatured: false
  },
  {
    id: 'lantern-001',
    name: 'LED ランタン 充電式',
    slug: 'led-lantern-rechargeable',
    description: '明るく長持ちする充電式LEDランタン。無段階調光機能付きで、シーンに応じた明るさに調整可能。',
    price: 6800,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    category: {
      id: 'lighting',
      name: '照明・電源',
      slug: 'lighting',
      description: 'キャンプ用照明器具',
      image: '',
      subcategories: [],
      isActive: true,
      sortOrder: 4
    },
    subcategory: 'ランタン',
    brand: 'Bright Light',
    sku: 'BL-LT-001',
    stock: 25,
    variants: [
      {
        id: 'lantern-001-black',
        name: 'カラー',
        value: 'ブラック',
        type: 'color',
        stock: 15,
        isDefault: true
      },
      {
        id: 'lantern-001-white',
        name: 'カラー',
        value: 'ホワイト',
        type: 'color',
        stock: 10
      }
    ],
    features: [
      '高輝度LED使用',
      '無段階調光',
      '充電式（USB-C）',
      '防水性能IPX4'
    ],
    specifications: {
      '重量': '280g',
      'サイズ': '8.5 x 8.5 x 12cm',
      '明るさ': '最大1000ルーメン',
      '点灯時間': '最大20時間',
      '充電時間': '約4時間',
      '防水性': 'IPX4'
    },
    reviews: [],
    rating: 4.6,
    reviewCount: 33,
    tags: ['LED', '充電式', '調光', '防水'],
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
    isActive: true,
    isFeatured: true
  },
  {
    id: 'backpack-001',
    name: 'トレッキング バックパック 40L',
    slug: 'trekking-backpack-40l',
    description: '1泊2日のキャンプに最適な40Lバックパック。背面ベンチレーション機能で長時間の移動も快適。',
    price: 16800,
    comparePrice: 19800,
    images: [
      'https://images.unsplash.com/photo-1544966503-7cc36a08d5c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    category: {
      id: 'gear',
      name: 'アパレル・ギア',
      slug: 'gear',
      description: 'アウトドア用品',
      image: '',
      subcategories: [],
      isActive: true,
      sortOrder: 5
    },
    subcategory: 'バックパック',
    brand: 'Trail Master',
    sku: 'TM-BP-001',
    stock: 18,
    variants: [
      {
        id: 'bp-001-gray',
        name: 'カラー',
        value: 'グレー',
        type: 'color',
        stock: 10,
        isDefault: true
      },
      {
        id: 'bp-001-blue',
        name: 'カラー',
        value: 'ブルー',
        type: 'color',
        stock: 8
      }
    ],
    features: [
      '背面ベンチレーション',
      '多機能ポケット',
      '雨カバー付属',
      '調整可能ストラップ'
    ],
    specifications: {
      '重量': '1.8kg',
      'サイズ': '55 x 35 x 20cm',
      '容量': '40L',
      '素材': 'ナイロン420D',
      '背面長': '43-48cm調整可能',
      '付属品': 'レインカバー'
    },
    reviews: [],
    rating: 4.4,
    reviewCount: 21,
    tags: ['40L', 'ベンチレーション', '雨カバー', '調整可能'],
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03'),
    isActive: true,
    isFeatured: false
  },
  {
    id: 'chair-001',
    name: 'アウトドア 折りたたみチェア',
    slug: 'outdoor-folding-chair',
    description: '軽量で丈夫な折りたたみチェア。コンパクトに収納でき、持ち運びに便利。背もたれ付きで長時間座っても疲れません。',
    price: 4800,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    category: {
      id: 'furniture',
      name: 'ファニチャー',
      slug: 'furniture',
      description: 'キャンプ用家具',
      image: '',
      subcategories: [],
      isActive: true,
      sortOrder: 6
    },
    subcategory: 'チェア',
    brand: 'Comfort Outdoor',
    sku: 'CO-CH-001',
    stock: 30,
    variants: [
      {
        id: 'chair-001-khaki',
        name: 'カラー',
        value: 'カーキ',
        type: 'color',
        stock: 20,
        isDefault: true
      },
      {
        id: 'chair-001-navy',
        name: 'カラー',
        value: 'ネイビー',
        type: 'color',
        stock: 10
      }
    ],
    features: [
      '軽量設計（1.2kg）',
      'コンパクト収納',
      '背もたれ付き',
      '耐荷重100kg'
    ],
    specifications: {
      '重量': '1.2kg',
      'サイズ': '52 x 50 x 80cm',
      '収納サイズ': '52 x 50 x 8cm',
      '座面高': '35cm',
      '耐荷重': '100kg',
      '素材': 'アルミニウム、ポリエステル'
    },
    reviews: [],
    rating: 4.2,
    reviewCount: 18,
    tags: ['軽量', '折りたたみ', '背もたれ', '100kg'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    isActive: true,
    isFeatured: false
  }
]

export const productCategories = [
  { id: 'all', name: 'すべて', slug: 'all' },
  { id: 'tents', name: 'テント', slug: 'tents' },
  { id: 'sleeping', name: '寝袋', slug: 'sleeping' },
  { id: 'cooking', name: '調理器具', slug: 'cooking' },
  { id: 'lighting', name: 'ライト', slug: 'lighting' },
  { id: 'gear', name: 'バックパック', slug: 'gear' },
  { id: 'furniture', name: 'ファニチャー', slug: 'furniture' }
]

export const priceRanges = [
  { id: 'all', name: 'すべて', min: 0, max: Infinity },
  { id: '0-5000', name: '～5,000円', min: 0, max: 5000 },
  { id: '5000-10000', name: '5,000円～10,000円', min: 5000, max: 10000 },
  { id: '10000-20000', name: '10,000円～20,000円', min: 10000, max: 20000 },
  { id: '20000-', name: '20,000円～', min: 20000, max: Infinity }
]