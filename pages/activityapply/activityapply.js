var api = require('../../utils/api');
Page({
  data: {
    pic: null,
    photo: null
  },
 
  addimg: function () {
    var that = this;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        // 无论用户是从相册选择还是直接用相机拍摄，路径都是在这里面
        var filePath = res.tempFilePaths[0];
        console.log(res)
        //将刚才选的照片/拍的 放到下面view视图中
        that.setData({
          pic: filePath, //把照片路径存到变量中，
          carWin_img_hidden: false //让展示照片的view显示
        });
        // 这个是使用微信接口保存文件到数据库
        wx.uploadFile({
          url: api.UPLOAD,
          filePath: filePath,
          name: 'file',
          success: function (res) {
            that.setData({
              photo: JSON.parse(res.data).data.id
            })
            console.log(JSON.parse(res.data).data.id)
          }
        })
      },
      fail: function (error) {
        console.error("调用本地相册文件时出错")
        console.warn(error)
      },
      complete: function () {

      }
    });
  },

  onLoad: function () {
    
   
  },
  formSubmit: function (e) {
    let that = this;
    var data = e.detail.value;
    data.bu_photo_id=1;
    data.bu_purchaser_id=1;
    console.log(e.detail.value);
    api.post(api.PURCHASER + "/add", data)
      .then(res => {
        console.log(res);
        wx.reLaunch({
          url: '/pages/activity/activity'
        })
      })
  }
})
