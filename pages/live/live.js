Page({

  /**
   * 页面的初始数据
   */
  data: {
    isOne: true,
    currentLiveUrl: 'https://domain/pull_stream',
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
    ]
  },
  selectType(e) {
    this.setData({
      isOne: e.currentTarget.dataset.type
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