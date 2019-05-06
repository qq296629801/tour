import util from './../../utils/util.js';
var api = require('../../utils/api');
Page({
  data: {
    sortindex: 0,  //排序索引
    sortid: null,  //排序id
    sort: [],
    activitylist: [], //会议室列表列表
    scrolltop: null, //滚动位置
    scrollview:0,
    page: 1 ,
    totalPage:null
  },

  setList: function (page) {
    let that = this;
    var data= wx.getStorageSync('tenderlist');
    console.log(data);
    if(data!=null){
      this.setData(data)
    }
    api.get(api.TENDER + "/list", { page: page})
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
  searchScrollLower:function(){
    let that=this;
    var page = that.data.page+1;
    wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
      title: '加载中',
      icon: 'loading',
    });
    if (page <= that.data.totalPage){
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
    }else{
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