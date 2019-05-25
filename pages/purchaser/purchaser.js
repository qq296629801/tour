Page({

  /**
   * 页面的初始数据
   */
  data: {
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

  toDetail (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../company/company?id=' + id,
    })
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