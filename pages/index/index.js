
//获取应用实例
var app = getApp()
var api = require('../../utils/api');
Page({
  data: {
    banner: null,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    advertise: null,
    hotList: null,
    bangumiList:null,
    currentSwiper:0,
    indexmenu: [
      {
        'icon': './../../images/采购商.png',
        'text': '采购商',
        'url': 'space'
      },
     
      {
        'icon': './../../images/供求信息.png',
        'text': '供求信息',
        'url': 'property'
      },
      {
        'icon': './../../images/供应商.png',
        'text': '供应商',
        'url': 'question'
      },
      {
        'icon': './../../images/关于我们.png',
        'text': '关于我们',
        'url': 'service'
      },
      {
        'icon': './../../images/会务直播.png',
        'text': '会务直播',
        'url': 'au'
      },
      {
        'icon': './../../images/招商入驻.png',
        'text': '招商入驻',
        'url': 'companyapply'
      }
      
    ],
    // 正在直播
    liveList: [
      {
        coverImg: 'http://i0.hdslb.com/bfs/live/96025d17ed05961230a7d1401ca1fe3b79cc12db.jpg',
        avatarImg: 'http://i2.hdslb.com/bfs/face/c55b2eae13646925187514c6f19e19293294d0c5.jpg',
        name: '尤樱',
        desp: '你女朋友在直播你不来看看吗？',
        online: '877',
        avid: 'av5'
      },
      {
        coverImg: 'http://i0.hdslb.com/bfs/live/a1678768dd9c7023af7ab0f3de2a2df2c525e741.jpg',
        avatarImg: 'http://i0.hdslb.com/bfs/face/d1bec5ec111987537ecf3e7f43a8b3678ed3c5c3.jpg',
        name: '我是小麦伊哦哦',
        desp: '告别:我爱你们',
        online: '877',
        avid: 'av6'
      },
      {
        coverImg: 'http://i0.hdslb.com/bfs/live/89047f3faee35d0cb095d7dfb01ec4d3a8ec4434.jpg',
        avatarImg: 'http://i0.hdslb.com/bfs/face/1e31ac069058528e26b9be60b26d86c9c9a99f62.jpg',
        name: '坂本叔',
        desp: '【坂本】非洲黑客',
        online: '877',
        avid: 'av7'
      },
      {
        coverImg: 'http://i0.hdslb.com/bfs/live/24dbcc68325ff5fb3d235af97ad075dc5087733a.jpg',
        avatarImg: 'http://i2.hdslb.com/bfs/face/c55b2eae13646925187514c6f19e19293294d0c5.jpg',
        name: 'miriちゃん',
        desp: '日语点歌姬',
        online: '877',
        avid: 'av8'
      }
    ],
  },
  swiperChange: function (e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  },
  /*
  * 首页banner
  */
  setBanner: function () {
    let that = this;
    api.get(api.BANNER)
      .then(res => {
        this.setData({
          banner: res.data.data
        })
    })
  },

  setProduct:function(){
    let that = this;
    api.get(api.INDEX +"/product")
      .then(res => {
        var datas = res.data.data;
        for (var i in datas) {
          datas[i].columns.url = api.PATH + datas[i].columns.url
        }
        this.setData({
          bangumiList: datas
        })
      })
  },

  setCompany:function(){
    let that = this;
    api.get(api.INDEX +"/company")
      .then(res => {
        var datas = res.data.data;
        for (var i in datas) { 
          datas[i].columns.url = api.PATH + datas[i].columns.url
        }
        this.setData({
          hotList: datas
        })
      })
  },

 
  /**
   * 首页两块子banner
   */
  setSubBanner: function(){
    let that = this;
    api.get(api.ADVERTISE)
      .then(res => {
        this.setData({
          advertise: res.data.data
        })
      })
  },

 
  /**
   * 模块入口
   */
  setModule: function(){
    var that = this;
    that.setCompany();
    that.setProduct();
    that.setBanner();
    that.setSubBanner();
  },

   /**
   * 入口
   */
  onLoad: function () {
    var that = this;
    that.setModule();
  },
  onPullDownRefresh: function () { //下拉刷新
    wx.showNavigationBarLoading()
    //在标题栏中显示加载
    var that = this;
    that.onLoad();
    //模拟加载
    wx.hideNavigationBarLoading()
    //完成停止加载
    wx.stopPullDownRefresh()
    //停止下拉刷新
  }
});