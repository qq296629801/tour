var api = require('../../utils/api');
import util from './../../utils/util.js';
Page({
  data: {
    a: null,
    userlist:null,
    sortid: null,  //排序id
  },
  onLoad: function (options) {
    this.getSupplierListByTender(options.id);
  },

  getSupplierListByTender:function(id){
    let that = this;
    api.get(api.PURCHASER + "/tender", { bu_tender_id: id })
      .then(res => {
        that.setData({
          userlist: res.data.data,
          a: res.data.data[0].columns
        })
        console.log(that.data.a);
      })
  },
  submitTender:function(e){
    const d = this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      sortid: dataset.sortid,
      a: d.userlist[dataset.sortid].columns
    })
  },
  apply:function(){
    var data=this.data;
    api.get(api.PURCHASER + "/update", { id: this.data.a.stid })
      .then(res => {
        console.log(res.data);
      })
  }
})
