import util from './../../utils/util.js';
var api = require('../../utils/api');
Page({
  data: {
    sortindex: 0,  //排序索引
    sortid: null,  //排序id
    sort: [],
    activitylist: [], //会议室列表列表
    scrolltop: null, //滚动位置
    scrollview: 0,
    page: 1,
    totalPage: null,
    image_photo: '',
    isOne: true,
    list: [
      {
        id: '0',
        avator: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: 'Eric',
        con: '今天天气甚好，出来玩...',
        imgs: [
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
        ],
        address: '长沙·浏阳市万花卡通园',
        time: '50分钟前',
        isLike: false
      },
      {
        id: '1',
        avator: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: 'Eric',
        con: '今天天气甚好，出来玩...',
        imgs: [
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
        ],
        address: '长沙·浏阳市万花卡通园',
        time: '50分钟前',
        isLike: true
      },
      {
        id: '2',
        avator: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: 'Eric',
        con: '今天天气甚好，出来玩，今天天气甚好，出来玩今天天气甚好，出来玩今天天气甚好，出来玩今天天气甚好，出来玩今天天气甚好，出来玩今天天气甚好，出来玩',
        imgs: [
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
        ],
        address: '长沙·浏阳市万花卡通园',
        time: '50分钟前',
        isLike: true
      },
      {
        id: '3',
        avator: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: 'Eric',
        con: '今天天气甚好，出来玩...',
        imgs: [
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
        ],
        address: '长沙·浏阳市万花卡通园',
        time: '50分钟前',
        isLike: false
      }
    ]
  },
  selectType(e) {
    this.setData({
      isOne: e.currentTarget.dataset.index
    })
  },
  //图片点击事件
  imgYu (event) {
    let src = event.currentTarget.dataset.src;//获取data-src
    let imgList = event.currentTarget.dataset.list;//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  },
  choice() {
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],
      success: (res) => {
        let imgs = res.tempFilePaths
        for (let i = 0; i < imgs.length; i++) {
          wx.uploadFile({
            url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
            filePath: imgs[i],
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
  setList: function (page) {
    let that = this;
    var data = wx.getStorageSync('tenderlist');
    console.log(data);
    if (data != null) {
      this.setData(data)
    }
    api.get(api.TENDER + "/list", { page: page })
      .then(res => {
        var datas = res.data.data.list;
        for (var i in datas) {
          datas[i].columns.begin_date = util.formatTime(datas[i].columns.begin_date)
          datas[i].columns.end_date = util.formatTime(datas[i].columns.end_date)
        }
        wx.setStorageSync('tenderlist', {
          activitylist: datas,
          page: res.data.data.pageNumber,
          totalPage: res.data.data.totalPage
        });
        this.setData({
          activitylist: datas,
          page: res.data.data.pageNumber,
          totalPage: res.data.data.totalPage
        })
      })
  },
  onLoad: function (options) { //加载数据渲染页面
    this.setList(options.id == null ? 1 : options.id);
    this.fetchSortData();
  },
  fetchSortData: function () { //获取筛选条件
    this.setData({
      "sort": [
        {
          "id": 0,
          "title": "热门点击"
        },
        {
          "id": 1,
          "title": "最新发布"
        },
        {
          "id": 2,
          "title": "最多参与"
        },
      ]
    })
  },
  setSortBy: function (e) { //选择排序方式
    const d = this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      sortindex: dataset.sortindex,
      sortid: dataset.sortid
    })
    console.log('排序方式id：' + this.data.sortid);
  },
  setStatusClass: function (e) { //设置状态颜色
    console.log(e);
  },
  scrollHandle: function (e) { //滚动事件
    this.setData({
      scrolltop: e.detail.scrollTop
    })
  },
  searchScrollLower: function () {
    let that = this;
    var page = that.data.page + 1;
    wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
      title: '加载中',
      icon: 'loading',
    });
    if (page <= that.data.totalPage) {
      api.get(api.TENDER + "/list", { page: page })
        .then(res => {
          var dataService = res.data.data.list;
          var dataClient = that.data.activitylist;
          for (var i in dataService) {
            dataClient.push(dataService[i]);
          }
          that.setData({
            activitylist: dataClient,
            page: res.data.data.pageNumber,
            totalPage: res.data.data.totalPage
          })
          wx.hideLoading();
        })
    } else {
      wx.hideLoading();
    }
  },
  goToTop: function () { //回到顶部
    this.setData({
      scrollview: 0
    })
  },
  onPullDownRefresh: function () { //下拉刷新
    this.setData({
      page: 1,
      activitylist: []
    });
    this.setList(1);
    wx.stopPullDownRefresh();
  }
})