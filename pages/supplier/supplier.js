Page({

  /**
   * 页面的初始数据
   */
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
    icons: [
      {
        'icon': './../../images/supplier-1.png',
        'name': '游乐设施',
        'id': '1'
      },

      {
        'icon': './../../images/supplier-2.png',
        'name': '公共设施',
        'id': '2'
      },
      {
        'icon': './../../images/supplier-3.png',
        'name': '观景小品',
        'id': '3'
      },
      {
        'icon': './../../images/supplier-4.png',
        'name': '花草苗木',
        'id': '4'
      },
      {
        'icon': './../../images/supplier-5.png',
        'name': '特色住宿',
        'id': '5'
      },
      {
        'icon': './../../images/supplier-6.png',
        'name': '农贸供应',
        'id': '6'
      },
      {
        'icon': './../../images/supplier-7.png',
        'name': '展览展示',
        'id': '7'
      },
      {
        'icon': './../../images/supplier-8.png',
        'name': '道路材料',
        'id': '8'
      },
      {
        'icon': './../../images/supplier-9.png',
        'name': '手工艺品',
        'id': '9'
      },
      {
        'icon': './../../images/supplier-10.png',
        'name': '仿真产品',
        'id': '10'
      },
      {
        'icon': './../../images/supplier-11.png',
        'name': '老旧物件',
        'id': '11'
      },
      {
        'icon': './../../images/supplier-12.png',
        'name': '设计服务',
        'id': '12'
      }

    ],
    imgs: [
      { title: '花海', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
      { title: '花海2粟花海2粟花海2粟花海2粟花海2粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
      { title: '花海3粟花海3粟花海3粟花海3粟花海3粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
      { title: '花海4粟花海4粟花海4粟花海4粟花海4粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
      { title: '花海5粟花海5粟花海5粟花海5粟花海5粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
      { title: '花海6粟花海6粟花海6粟花海6粟花海6粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' }
    ]
  },
  toType (e) {
    const str = JSON.stringify(e.currentTarget.dataset.item)
    wx.navigateTo({
      url: '../supliertype/supliertype?item=' + str,
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