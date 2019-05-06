var api = require('../../utils/api');
Page({
  data: {
    industryarr: [],
    industryindex: 0,
    statusarr: [],
    statusindex: 0,
    jobarr: [],
    jobindex: 0,
    hasfinancing: false,  //是否已融资
    isorg: false,  //是否是机构
    pic:'../../images/pic.jpg',
    aic:'../../images/aic.jpg',
    bigImg: '../../images/pic.jpg',
    userName:null
  },
  userNameInput:function(e){
    this.setData({
      userName: e.detail.value
    })
  },
  picImg:function(){
    this.setData({
      bigImg:this.data.pic
    })
  },
  aicImg:function(){
    this.setData({
      bigImg: this.data.aic
    })
  },
  onLoad: function () {
    this.fetchData()
  },
  fetchData: function () {
    this.setData({
      industryarr: ["请选择", "移动互联网", "手机游戏", "互联网金融", "O2O", "智能硬件", "SNS社交", "旅游", "影视剧", "生活服务", "电子商务", "教育培训", "运动和健康", "休闲娱乐", "现代农业", "文化创意", "节能环保", "新能源", "生物医药", "IT软件", "硬件", "其他"],
      statusarr: ["请选择", "初创时期", "市场扩展期", "已经盈利"],
      jobarr: ["请选择", "创始人", "联合创始人", "产品", "技术", "营销", "运营", "设计", "行政", "其他"]
    })
  },
  bindPickerChange: function (e) { //下拉选择
    const eindex = e.detail.value;
    const name = e.currentTarget.dataset.pickername;
    // this.setData(Object.assign({},this.data,{name:eindex}))
    switch (name) {
      case 'industry':
        this.setData({
          industryindex: eindex
        })
        break;
      case 'status':
        this.setData({
          statusindex: eindex
        })
        break;
      case 'job':
        this.setData({
          jobindex: eindex
        })
        break;
      default:
        return
    }
  },
  setFinance: function (e) { //选择融资
    this.setData({
      hasfinancing: e.detail.value == "已融资" ? true : false
    })
  },
  setIsorg: function (e) { //选择投资主体
    this.setData({
      isorg: e.detail.value == "机构" ? true : false
    })
  },
  applySubmit: function () {
   // wx.navigateTo({
    //  url: '../service/service'
    //})
    console.log(this.data.userName);
  },
  
pic:function(){
  var that = this;
  wx.chooseImage({
    count: 1,
    success: function (res) {
      // 无论用户是从相册选择还是直接用相机拍摄，路径都是在这里面
      var filePath = res.tempFilePaths[0];
      console.log(filePath)
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
           console.log(res)
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
  aic: function () {
    var that = this;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        // 无论用户是从相册选择还是直接用相机拍摄，路径都是在这里面
        var filePath = res.tempFilePaths[0];
        console.log(filePath)
        //将刚才选的照片/拍的 放到下面view视图中
        that.setData({
          aic: filePath, //把照片路径存到变量中，
          carWin_img_hidden: false //让展示照片的view显示
        });
        // 这个是使用微信接口保存文件到数据库
        wx.uploadFile({
          url: api.UPLOAD,
          filePath: filePath,
          name: 'file',
          success: function (res) {
            console.log(res)
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
  }

})
