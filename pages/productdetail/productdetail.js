var api = require('../../utils/api')
var WxParse = require('../../wxParse/wxParse.js')
Page({
  data: {
    activitydata: {},
    spaceimgs: [],
    currentIndex: 1
  },
  onLoad: function (options) {
    var that = this
    var id = options.id;
    api.get(api.COMPANY+"/single", { id: id })
      .then(res => {
        this.setData({
          activitydata: res.data.data.columns
        })
        WxParse.wxParse('article', 'html', res.data.data.columns.contact, that, 5);
        // setTimeout(()=>{
        wx.setNavigationBarTitle({
          title: res.data.data.columns.name
        })
    // },1000)
      });
    
    api.get(api.COMPANY+"/photo", { id: id })
      .then(res => {
        this.setData({
          spaceimgs: res.data.data
        })
      });
   
  },
  setCurrent: function (e) {
    this.setData({
      currentIndex: e.detail.current + 1
    })
  },
  imgPreview: function () { //图片预览
    const imgs = this.data.spaceimgs;
    wx.previewImage({
      current: imgs[this.data.currentIndex - 1], // 当前显示图片的http链接
      urls: imgs // 需要预览的图片http链接列表
    })
  },
  reserveHandle: function () {
    wx.navigateTo({
      url: '../spacereserve/spacereserve'
    })
  }

})
