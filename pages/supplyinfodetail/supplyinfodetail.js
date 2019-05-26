// pages/supplyinfodetail/supplyinfodetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    payType: '',
    hidden: true,
    items: [
      { name: '包周会员免费', value: 0 },
      { name: '半年会员￥1000', value: 1 },
      { name: '包年会员￥2000（推荐）', value: 2 }
    ],
    detail: {
      name: '长沙麓谷汽车世界',
      time: '2019-04-05',
      num: 'LGQC-00313',
      type: '询价采购',
      dep: 'xxxx',
      address: '长沙市**********',
      contacts: '李**',
      tel: '15858194070',
      city: '长沙',
      status: 2,
      id: '3',
      imgs: [
        { title: '花海1粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
        { title: '花海2粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
        { title: '花海3粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
        { title: '花海4粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
        { title: '花海5粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
        { title: '花海6粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' }
      ],
      introduce: `本公司经过十多年的磨炼，现在能自助研发培育新品种。现公司主要经营时令花草、宿根花卉、水生植物、月季、观赏草、绿化工程施工及各种大型景观花海。花卉的配套设施，设计及施工。
    本公司免费为您提供花卉苗木种植、技术移植与病虫害的防治。所有经营项目公司都免费为您提供售后服务与指导。
    湖南省魅力五洲景观花海有限公司秉承“诚信、共赢、稳健、发展”的理念，求真务实、开拓进取，热忱的欢迎广大新老客户前来参观考察洽谈合作。`,
    }
  },
  getHiddenInfo () {
    this.setData({
      hidden: false
    })
  },
  radioChange(e) {
    this.setData({
      payType: e.detail.value
    })
  },
  weixinPay() {
    console.warn('微信支付')
    this.setData({
      hidden: true
    });
  },
  alipay() {
    console.warn('支付宝支付')
    this.setData({
      hidden: true
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
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