Page({
  data: {
    isOne: true,
    list: [
      {
        id: '0',
        avator: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: 'Eric',
        con: '今天天气甚好，出来玩...',
        imgs: [
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
        ],
        address: '长沙·浏阳市万花卡通园',
        time: '50分钟前',
        isLike: false
      },
      {
        id: '1',
        avator: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: 'Eric',
        con: '今天天气甚好，出来玩...',
        imgs: [
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
        ],
        address: '长沙·浏阳市万花卡通园',
        time: '50分钟前',
        isLike: true
      },
      {
        id: '2',
        avator: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: 'Eric',
        con: '今天天气甚好，出来玩，今天天气甚好，出来玩今天天气甚好，出来玩今天天气甚好，出来玩今天天气甚好，出来玩今天天气甚好，出来玩今天天气甚好，出来玩',
        imgs: [
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
        ],
        address: '长沙·浏阳市万花卡通园',
        time: '50分钟前',
        isLike: true
      },
      {
        id: '3',
        avator: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: 'Eric',
        con: '今天天气甚好，出来玩...',
        imgs: [
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
        ],
        address: '长沙·浏阳市万花卡通园',
        time: '50分钟前',
        isLike: false
      }
    ]
  },
  selectType(e) {
    this.setData({
      isOne: e.currentTarget.dataset.index
    })
  },
  //图片点击事件
  imgYu (event) {
    let src = event.currentTarget.dataset.src
    let imgList = event.currentTarget.dataset.list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  },
  choice() {
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],
      success: (res) => {
        let imgs = res.tempFilePaths
        for (let i = 0; i < imgs.length; i++) {
          wx.uploadFile({
            url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
            filePath: imgs[i],
            name: 'file',
            formData: {
              'user': 'test'
            },
            success: (res) => {
              var data = res.data
              //do something
            }
          })
        }
      }
    })
  },
})