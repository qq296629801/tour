Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    indicatorDots: true,
    banner: [{
        target: '',
        url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
      },
      {
        target: '',
        url: 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640'
      },
      {
        target: '',
        url: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      }
    ],
    autoplay: true,
    interval: 3000,
    duration: 1000,
    info: {
      logo: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      name: '湖南农家乐山寨',
      score: '5.0',
      num: 12243,
      address: '长沙宁乡经济开发区红坪工业园区长沙宁乡经...',
      introduce: `本公司经过十多年的磨炼，现在能自助研发培育新品种。现公司主要经营时令花草、宿根花卉、水生植物、月季、观赏草、绿化工程施工及各种大型景观花海。花卉的配套设施，设计及施工。
    本公司免费为您提供花卉苗木种植、技术移植与病虫害的防治。所有经营项目公司都免费为您提供售后服务与指导。
    湖南省魅力五洲景观花海有限公司秉承“诚信、共赢、稳健、发展”的理念，求真务实、开拓进取，热忱的欢迎广大新老客户前来参观考察洽谈合作。`,
      imgs: [
        { title: '花海1粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
        { title: '花海2粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
        { title: '花海3粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
        { title: '花海4粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
        { title: '花海5粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
        { title: '花海6粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' }
      ],
      imgss: [
        { title: '花海1粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
        { title: '花海2粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
        { title: '花海3粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
        { title: '花海4粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
        { title: '花海5粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' },
        { title: '花海6粟', url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' }
      ]
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      id: options.id
    })
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