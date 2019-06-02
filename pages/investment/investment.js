Page({

  /**
   * 页面的初始数据
   */
  data: {
    customItem: '全部',
    region: [],
    region1: [],
    date: null,
    type: 0,
    license: '',
    idCard: '',
    logo: ''
  },
  bindRegionChange(e) {
    this.setData({
      region: e.detail.value
    })
  },
  bindRegion1Change(e) {
    this.setData({
      region: e.detail.value
    })
  },
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  choice(e) {
    let type = e.currentTarget.dataset.index
    console.log(type)
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],
      success: (res) => {
        let arr = res.tempFilePaths
        for (let i = 0; i < arr.length; i++) {
          wx.uploadFile({
            url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
            filePath: arr[i],
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})