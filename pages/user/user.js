var app = getApp();

Page({
  	data: {
  		userInfo: {},
      mode: {
        data: [{ url: 'mycompany', name: '我的公司' }, { url: 'myproduct', name: '我的产品' }, { url: 'mytender', name: '我的标的' }, { url: '', name: '我的直播' }, { url: '', name: '联系我们' }]
      }, indexmenu: [

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
  	onLoad: function() {
  		var that = this;
      wx.openSetting({
        success(res) {
          console.log(res.authSetting)
           res.authSetting = {
             "scope.userInfo": true,
             "scope.userLocation": true
          }
        }
      });

  		wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      });
  	}
})