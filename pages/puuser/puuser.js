var app = getApp();

Page({
  data: {
    userInfo: {},
    mode: {
      data: [ { url: 'pumytender', name: '我的标的' }, { url: '', name: '我的直播' }, { url: '', name: '联系我们' }]
    },
    indexmenu: [
      
      {
        'icon': './../../images/icon_07.png',
        'text': '资质认证',
        'url': 'au'
      },
      {
        'icon': './../../images/icon_13.png',
        'text': '入驻申请',
        'url': 'companyapply'
      },
      {
        'icon': './../../images/icon_13.png',
        'text': '产品发布',
        'url': 'apply'
      },
      {
        'icon': './../../images/icon_05.png',
        'text': '发标',
        'url': 'activityapply'
      },

    ]

  },
  onLoad: function () {
    wx.login({
      success(res) {
        if (res.code) {
          // 发起网络请求
          wx.request({
            url: 'http://localhost:8080/wx/toLogin',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }

})