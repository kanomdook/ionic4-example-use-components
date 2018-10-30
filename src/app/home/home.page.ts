import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  category: any = {
    'status': 200,
    'data': {
      'category': {
        'title': 'หมวดหมู่',
        'items': [
          {
            '_id': 'cate001',
            'name': 'เสื้อผ้าแฟชั่นผู้ชาย',
            'image': {
              'url': 'https://cf.shopee.co.th/file/cb5c30020fd21663ea93967cc68abad2_tn'
            }
          },
          {
            '_id': 'cate002',
            'name': 'มือถือและอุปกรณ์เสริม',
            'image': {
              'url': 'https://cf.shopee.co.th/file/4e920b485d1d00fb8d5b6644bf85e2f0_tn'
            }
          },
          {
            '_id': 'cate003',
            'name': 'เครื่องใช้ในบ้าน',
            'image': {
              'url': 'https://cf.shopee.co.th/file/057483a50a43a513384c1ce5ed5d3656_tn'
            }
          },
          {
            '_id': 'cate004',
            'name': 'นาฬิกาและแว่นตา',
            'image': {
              'url': 'https://cf.shopee.co.th/file/22a761fed91954f9f90edcaad1c59381_tn'
            }
          },
          {
            '_id': 'cate005',
            'name': 'รองเท้าผู้ชาย',
            'image': {
              'url': 'https://cf.shopee.co.th/file/62c7c766f22f8652fb37a21da9c803f5_tn'
            }
          },
          {
            '_id': 'cate006',
            'name': 'คอมพิวเตอร์และแล็ปท็อป',
            'image': {
              'url': 'https://cf.shopee.co.th/file/c01fb69af0327ca988efcf2d83192ae8_tn'
            }
          },
          {
            '_id': 'cate007',
            'name': 'กล้องและอุปกรณ์ถ่ายภาพ',
            'image': {
              'url': 'https://cf.shopee.co.th/file/5ad2f4b27ba654437aade63af7f33190_tn'
            }
          },
          {
            '_id': 'cate008',
            'name': 'กีฬาและกิจกรรมกลางแจ้ง',
            'image': {
              'url': 'https://cf.shopee.co.th/file/8110dc3308ed5451f29e6a1d6a3bcdcd_tn'
            }
          },
          {
            '_id': 'cate009',
            'name': 'สื่อบันเทิงภายในบ้าน',
            'image': {
              'url': 'https://cf.shopee.co.th/file/033077b1335cbebc616ab82432837844_tn'
            }
          },
          {
            '_id': 'cate100',
            'name': 'อื่นๆ',
            'image': {
              'url': 'https://cf.shopee.co.th/file/80bb2c205344a459072b199332e7d8f4_tn'
            }
          }
        ]
      }
    }
  };
  specialsaleGrid: any = {
    'status': 200,
    'data': {
      'specialsale': {
        'title': 'Special Sale',
        'items': [{
          '_id': 'product001',
          'image': { 'url': 'https://cf.shopee.co.th/file/ae0b039c2e06c63dffa0cc11c9a2fd6b_tn' },
          'newprice': '฿1,115',
          'percentage': 20,
          'stock': 100,
          'sale': 5

        }, {
          '_id': 'product002',
          'image': { 'url': 'https://cf.shopee.co.th/file/a37f73aa9c2312afd3b659364812b114_tn' },
          'newprice': '฿625',
          'percentage': 10,
          'stock': 100,
          'sale': 30

        }, {
          '_id': 'product003',
          'image': { 'url': 'https://cf.shopee.co.th/file/a33591ce1c344ffac99a405a2d6b2cd5_tn' },
          'newprice': '฿1,600',
          'percentage': 40,
          'stock': 100,
          'sale': 50

        }, {
          '_id': 'product004',
          'image': { 'url': 'https://cf.shopee.co.th/file/32df13e184cab9b445773de4993b76bf_tn' },
          'newprice': '฿2,225',
          'percentage': 20,
          'stock': 100,
          'sale': 95

        }, {
          '_id': 'product005',
          'image': { 'url': 'https://cf.shopee.co.th/file/f63da3aabc4fd304c9ae68a0bbbc5885_tn' },
          'newprice': '฿1,115',
          'percentage': 20,
          'stock': 100,
          'sale': 100

        }, {
          '_id': 'product006',
          'image': { 'url': 'https://cf.shopee.co.th/file/bfe9f76bbc1e220f0cbfd2d622b44513_tn' },
          'newprice': '฿45',
          'percentage': 20,
          'stock': 50,
          'sale': 5

        }, {
          '_id': 'product007',
          'image': { 'url': 'https://cf.shopee.co.th/file/e9ac19f73e65bb90306432aa4d8aad84_tn' },
          'newprice': '฿25,945',
          'percentage': 20,
          'stock': 50,
          'sale': 25

        }]
      }
    }
  };
  bestsellerScrollx: any = {
    'status': 200,
    'data': {
      'bestseller': {
        'title': 'ขายดีประจำสัปดาห์',
        'items': [{
          '_id': 'Product001',
          'name': 'OPPO F9',
          'image': { 'url': 'https://cf.shopee.co.th/file/3a742c8d6d16d195ac12e4599fe21f4d_tn' }
        }, {
          '_id': 'Product002',
          'name': 'นมแพะ DG3 ขนาด 400 กรัม',
          'image': { 'url': 'https://cf.shopee.co.th/file/ac07e90a887258f2c6de9a8f58f5f60d_tn' }
        }, {
          '_id': 'Product003',
          'name': 'JACOB Hand bag กระเป๋าถือ',
          'image': { 'url': 'https://cf.shopee.co.th/file/63a7ce254fe99eb82c77fedcc5e8de25_tn' }
        }, {
          '_id': 'Product004',
          'name': 'เสื้อยืด Cotton 100% 5th',
          'image': { 'url': 'https://cf.shopee.co.th/file/9847bb7dbff1320f75eea4b784d8e2db_tn' }
        }, {
          '_id': 'Product005',
          'name': 'Samsung Galaxy A7',
          'image': { 'url': 'https://cf.shopee.co.th/file/9b61c0445864ecba4716cb7a7c1320d3_tn' }
        }, {
          '_id': 'Product006',
          'name': 'BNK48 Comic Most Dream vol.1',
          'image': { 'url': 'https://cf.shopee.co.th/file/14c8af3419d15b1abb885ac4f470cf20_tn' }
        }, {
          '_id': 'Product007',
          'name': 'เครื่องพิมพ์ Canon G2010',
          'image': { 'url': 'https://cf.shopee.co.th/file/245082a1661ca2a6016ff96193d737f2_tn' }
        }, {
          '_id': 'Product008',
          'name': 'ชามไม้ไผ่ ธรรมชาติ สำหรับเด็ก',
          'image': { 'url': 'https://cf.shopee.co.th/file/a1fdca2d391ec2a0fde86f195d479f45_tn' }
        }]
      }
    }
  };
  productGrid: any = {
    data: {
      product: {
        title: 'สินค้าแนะนำ',
        items: [{
          _id: 'Product001',
          name: 'OPPO F9',
          image: { url: 'https://cf.shopee.co.th/file/3a742c8d6d16d195ac12e4599fe21f4d_tn' },
          pricetext: '฿9,400',
          newpricetext: '฿9,200',
          percentage: 2,
          likes: 117,
          ratings: 5,
          reviews: 29,
          shippingfeetag: false,
          stock: 0
        }, {
          _id: 'Product002',
          name: 'นมแพะ DG3 ขนาด 400 กรัม',
          image: { 'url': 'https://cf.shopee.co.th/file/ac07e90a887258f2c6de9a8f58f5f60d_tn' },
          pricetext: '฿679',
          newpricetext: '',
          percentage: 0,
          likes: 6,
          ratings: 3.5,
          reviews: 20,
          shippingfeetag: true,
          stock: 2
        }, {
          _id: 'Product003',
          name: 'JACOB Hand bag กระเป๋าถือ',
          image: { url: 'https://cf.shopee.co.th/file/63a7ce254fe99eb82c77fedcc5e8de25_tn' },
          pricetext: '฿150',
          newpricetext: '฿139',
          percentage: 7,
          likes: 104,
          ratings: 3,
          reviews: 8,
          shippingfeetag: true,
          stock: 5
        }, {
          _id: 'Product004',
          name: 'เสื้อยืด Cotton 100% 5th',
          image: { url: 'https://cf.shopee.co.th/file/9847bb7dbff1320f75eea4b784d8e2db_tn' },
          pricetext: '฿280',
          newpricetext: '',
          percentage: 0,
          likes: 32,
          ratings: 0,
          reviews: 0,
          shippingfeetag: false,
          stock: 5
        }, {
          _id: 'Product005',
          name: 'Samsung Galaxy A7',
          image: { url: 'https://cf.shopee.co.th/file/9b61c0445864ecba4716cb7a7c1320d3_tn' },
          pricetext: '฿10,990',
          newpricetext: '',
          percentage: 0,
          likes: 196,
          ratings: 0,
          reviews: 0,
          shippingfeetag: true,
          stock: 0
        }, {
          _id: 'Product006',
          name: 'BNK48 Comic Most Dream vol.1',
          image: { url: 'https://cf.shopee.co.th/file/14c8af3419d15b1abb885ac4f470cf20_tn' },
          pricetext: '฿300-350',
          newpricetext: '฿150-฿250',
          percentage: 25,
          likes: 106,
          ratings: 4,
          reviews: 5,
          shippingfeetag: true,
          stock: 0
        }, {
          _id: 'Product007',
          name: 'เครื่องพิมพ์ Canon G2010',
          image: { url: 'https://cf.shopee.co.th/file/245082a1661ca2a6016ff96193d737f2_tn' },
          pricetext: '฿3,600',
          newpricetext: '฿3,200',
          percentage: 11,
          likes: 559,
          ratings: 4.5,
          reviews: 224,
          shippingfeetag: false,
          stock: 5
        }, {
          _id: 'Product008',
          name: 'ชามไม้ไผ่ ธรรมชาติ สำหรับเด็ก',
          image: { url: 'https://cf.shopee.co.th/file/a1fdca2d391ec2a0fde86f195d479f45_tn' },
          pricetext: '฿120',
          newpricetext: '฿90',
          percentage: 25,
          likes: 185,
          ratings: 5,
          reviews: 6,
          shippingfeetag: false,
          stock: 0
        }]
      }
    }
  };
  shopGrid: any = {
    'status': 200,
    'data': {
      'shop': {
        'title': 'ร้านค้า',
        'items': [{
          '_id': 'shop001',
          'image': { 'url': 'https://cf.shopee.co.th/file/b1824e389362a173a6a6968379a2dbe6' }
        }, {
          '_id': 'shop002',
          'image': { 'url': 'https://cf.shopee.co.th/file/32a817fa8c243823534c3f250cdd7567' }
        }, {
          '_id': 'shop003',
          'image': { 'url': 'https://cf.shopee.co.th/file/de43e06be7c06f86d4277fd0f12459a8' }
        }, {
          '_id': 'shop004',
          'image': { 'url': 'https://cf.shopee.co.th/file/fcc086a6c917d9360d0a4516d28a9bb3' }
        }, {
          '_id': 'shop005',
          'image': { 'url': 'https://cf.shopee.co.th/file/38eb2d452779691d4845377b7c53d36d' }
        }, {
          '_id': 'shop006',
          'image': { 'url': 'https://cf.shopee.co.th/file/3ba8840e4c2481943d2fdad617a38c32' }
        }, {
          '_id': 'shop007',
          'image': { 'url': 'https://cf.shopee.co.th/file/a16918766afdfc850edb595ccc6d2a5c' }
        }, {
          '_id': 'shop008',
          'image': { 'url': 'https://cf.shopee.co.th/file/d33a9265ee619473ac48aa63c892f3d0' }
        }, {
          '_id': 'shop009',
          'image': { 'url': 'https://cf.shopee.co.th/file/e532dd52329b3952db2985b669189343' }
        }]
      }
    }
  };
  slideImage: any = {
    'status': 200,
    'data': {
      'campaign': [{
        '_id': 'cam0001',
        'image': {
          'url': 'https://cf.shopee.co.th/file/ea642e2f5ee11fd7b9812d5259be00ce'
        }
      }, {
        '_id': 'cam0002',
        'image': {
          'url': 'https://cf.shopee.co.th/file/a6ad31846a27a24048385609e5de8510'
        }
      }, {
        '_id': 'cam0003',
        'image': {
          'url': 'https://cf.shopee.co.th/file/a537c6f8e30f051758c8e722292dde02'
        }
      }]
    }
  };

  constructor(
    private navCtrl: NavController
  ) {
  }

  itemSelected(e) {
    console.log(e);
  }

  dataSelected(e) {
    console.log(e);
  }

  selectedData() {

  }

  toCartPage() {
  }

  openSpecialSalePage() {
  }

  openBestSellerPage() {
  }

}
