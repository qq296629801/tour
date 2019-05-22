Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatar: 'http://img.52z.com/upload/news/image/20180108/20180108122831_73637.jpg',
      name: '张山峰',
      number: '7849005'
    },
    itemList: [
      { key: 1, url: '../register/register', name: '邀请好友', imgPath: '../../images/jiangli.png' },
      { key: 2, url: '../register/register', name: '我的关注', imgPath: '../../images/watch.png' },
      { key: 3, url: '../register/register', name: '我的发布', imgPath: '../../images/publish.png' },
      { key: 4, url: '../register/register', name: '帮助和反馈', imgPath: '../../images/help.png' },
      { key: 5, url: '../register/register', name: '设置', imgPath: '../../images/set.png' }
    ]
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