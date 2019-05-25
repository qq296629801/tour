
//获取应用实例
var app = getApp()
var api = require('../../utils/api');
Page({
  data: {
    indicatorDots: true,
    banner: [
      { target: '', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
      { target: '', url: 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640' },
      { target: '', url: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640' }
    ],
    autoplay: true,
    interval: 3000,
    duration: 1000,
    shops: [
      { text: '商家推荐', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
      { text: '农庄推荐', url: 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640' },
      { text: '会务推荐', url: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640' }
    ],
    indexmenu: [
      {
        'icon': './../../images/purchaser.png',
        'text': '采购商',
        'url': 'purchaser'
      },
     
      {
        'icon': './../../images/supplyInfo.png',
        'text': '供求信息',
        'url': 'supplyinfo'
      },
      {
        'icon': './../../images/supplier.png',
        'text': '供应商',
        'url': 'supplier'
      },
      {
        'icon': './../../images/aboutUs.png',
        'text': '关于我们',
        'url': 'aboutus'
      },
      {
        'icon': './../../images/liveBroadcast.png',
        'text': '会务直播',
        'url': 'live'
      },
      {
        'icon': './../../images/investmentPromotion.png',
        'text': '招商入驻',
        'url': 'investment'
      }
      
    ]
  }
});