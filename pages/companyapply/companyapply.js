var api = require('../../utils/api');
Page({
  data: {
    companyName:null,
    companyAddress:null,
    companyContact:null,
    companyComment:null,
    companyContext:null,
    pic:null,
    jsonText:null,
  },
  addimg:function(){
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
              jsonText: JSON.parse(res.data)
            })
            console.log(JSON.parse(res.data).data)
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
  companyNameInput: function (e) {
    this.setData({
      companyName: e.detail.value
    })
  },
  companyAddressInput: function (e) {
    this.setData({
      companyAddress: e.detail.value
    })
  },
  companyContactInput: function (e) {
    this.setData({
      companyContact: e.detail.value
    })
  },
  companyCommentInput: function (e) {
    this.setData({
      companyComment: e.detail.value
    })
  },
  companyContextInput: function (e) {
    this.setData({
      companyContext: e.detail.value
    })
  },
  onLoad: function () {
    
  },
  applySubmit:function(){
    let that = this;
    var data = { name: that.data.companyName, address: that.data.companyAddress, contact: that.data.companyContact, comment: that.data.companyComment, context: that.data.companyContext, bu_photo_id: that.data.jsonText.data.id};
    console.log(data);
    api.get(api.COMPANY+"/add", data)
      .then(res => {
        console.log(res);
      })
  }
})
