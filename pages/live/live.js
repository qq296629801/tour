Page({

  /**
   * 页面的初始数据
   */
  data: {
    emotions: [],
    showEmoji: true,
    isLiving: false,
    isOne: true,
    isOne1: true,
    currentIndex: 0,
    playList: [
      {
        name: '第六届林业与畜牧业国际研讨会 (FAH 2019)',
        url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        time: '2019-10-26',
        address: '无需',
        scale: '20',
        organizer: '百花农业科技有限公司'
      },
      {
        name: '第六届林业与畜牧业国际研讨会 (FAH 2019)',
        url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        time: '2019-10-26',
        address: '无需',
        scale: '20',
        organizer: '百花农业科技有限公司'
      },
      {
        name: '第六届林业与畜牧业国际研讨会 (FAH 2019)',
        url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        time: '2019-10-26',
        address: '无需',
        scale: '20',
        organizer: '百花农业科技有限公司'
      },
      {
        name: '第六届林业与畜牧业国际研讨会 (FAH 2019)',
        url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        time: '2019-10-26',
        address: '无需',
        scale: '20',
        organizer: '百花农业科技有限公司'
      }
    ],
    list: [
      {
        avatar: 'http://img.52z.com/upload/news/image/20180108/20180108122831_73637.jpg',
        name: '张三',
        title: '项目经理',
        companyName: '北京盛大集团公司',
        city: '长沙',
        isLike: true,
        id: '1',
        desc: '该公司成立于1993年，在董事长的领导下迅速成长为100亿资产规模的大型高薪产业'
      },
      {
        avatar: 'http://img.52z.com/upload/news/image/20180108/20180108122831_73637.jpg',
        name: '张三',
        title: '项目经理',
        companyName: '北京盛大集团公司',
        city: '长沙',
        isLike: false,
        id: '2',
        desc: '该公司成立于1993年，在董事长的领导下迅速成长为100亿资产规模的大型高薪产业'
      },
      {
        avatar: 'http://img.52z.com/upload/news/image/20180108/20180108122831_73637.jpg',
        name: '张三',
        title: '项目经理',
        companyName: '北京盛大集团公司',
        city: '长沙',
        isLike: true,
        id: '3',
        desc: '该公司成立于1993年，在董事长的领导下迅速成长为100亿资产规模的大型高薪产业'
      },
      {
        avatar: 'http://img.52z.com/upload/news/image/20180108/20180108122831_73637.jpg',
        name: '张三',
        title: '项目经理',
        companyName: '北京盛大集团公司',
        city: '长沙',
        isLike: false,
        id: '1',
        desc: '该公司成立于1993年，在董事长的领导下迅速成长为100亿资产规模的大型高薪产业'
      },
      {
        avatar: 'http://img.52z.com/upload/news/image/20180108/20180108122831_73637.jpg',
        name: '张三',
        title: '项目经理',
        companyName: '北京盛大集团公司',
        city: '长沙',
        isLike: true,
        id: '4',
        desc: '该公司成立于1993年，在董事长的领导下迅速成长为100亿资产规模的大型高薪产业'
      }
    ]
  },
  handleShowEmoji () {
    this.setData({
      showEmoji: !this.data.showEmoji
    })
  },
  selectType(e) {
    this.setData({
      isOne: e.currentTarget.dataset.type
    })
  },
  selectType1(e) {
    this.setData({
      isOne1: e.currentTarget.dataset.type
    })
  },
  toDetail(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../company/company?id=' + id,
    })
  },
  statechange(e) {
    console.log('live-player code:', e.detail.code)
  },
  error(e) {
    console.error('live-player error:', e.detail.errMsg)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let emotions = []
    for (let i = 100; i < 200; i++) {
      emotions.push(i)
    }
    this.setData({
      emotions
    })
    console.warn('fff', this.data.emotions)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})