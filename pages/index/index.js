
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
      { name: '商家推荐', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
      { name: '农庄推荐', url: 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640' },
      { name: '会务推荐', url: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640' }
    ],
    icons: [
      {
        'icon': './../../images/purchaser.png',
        'name': '采购商',
        'url': '../purchaser/purchaser'
      },
     
      {
        'icon': './../../images/supplyInfo.png',
        'name': '供求信息',
        'url': '../supplyinfo/supplyinfo'
      },
      {
        'icon': './../../images/supplier.png',
        'name': '供应商',
        'url': '../supplier/supplier'
      },
      {
        'icon': './../../images/aboutUs.png',
        'name': '关于我们',
        'url': '../aboutus/aboutus'
      },
      {
        'icon': './../../images/liveBroadcast.png',
        'name': '会务直播',
        'url': '../live/live'
      },
      {
        'icon': './../../images/investmentPromotion.png',
        'name': '招商入驻',
        'url': '../investment/investment'
      }
      
    ]
  }
});