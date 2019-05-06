var api = require('../../utils/api');
import util from './../../utils/util.js';
 Page({
  data: {
    tender:{},
    userlist:{},
    spaceimgs: [],
    currentIndex: 1
  },
  onLoad: function (options) {
    let that = this;
    that.setTender(options.id);
    that.setSupplier(options.id);
  },
  apply:function(){
    var id = this.data.tender.id;
    var supplerId=1;
    //竞标
    api.get(api.SUPPLIER + "/add", { tenderId: id, supplerId: supplerId })
      .then(res => {
        console.log(res.data.data);
      })
    console.log();
  },
  setTender:function(id){
    api.get(api.TENDER +"/single",{id:id})
      .then(res => {
        var datas = res.data.data;
        datas.beginDate = util.formatTime(datas.beginDate);
        datas.endDate = util.formatTime(datas.endDate);
        this.setData({
          tender: datas
        })
        console.log(datas);
      })
  },

  setSupplier:function(id){
    //参与竞标人员
    api.get(api.TENDER + "/supplier", { tenderId: id })
      .then(res => {
        var datas = res.data.data;
        this.setData({
          userlist: datas
        })
        console.log(datas);
      })
  }
})
