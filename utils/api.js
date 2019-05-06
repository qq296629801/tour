'use strict';
import Promise from './es6-promise.min'

module.exports = {
  BANNER: 'http://localhost:8080/api/ad/swiper',
  TXTADS:'http://api.cyb.kuaiqiangche.com/event/advertise/roll',
  ADVERTISE:'http://api.cyb.kuaiqiangche.com/event/advertise/index',
  INDEX:'http://localhost:8080/api',
  COMPANY: 'http://localhost:8080/api/company',
  PRODUCT:'http://localhost:8080/api/product',
  UPLOAD: 'http://localhost:8080/api/public/upload',
  TENDER: 'http://localhost:8080/api/tender',
  PATH:'http://localhost:8000/img/',
  SUPPLIER:'http://localhost:8080/api/supplier',
  PURCHASER:'http://localhost:8080/api/purchaser',
  get (url) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        header: {
          'Content-Type': 'application/json;charset=UTF-8;'
        },
        success: function (res) {
          resolve(res)
        },
        fail: function (res) {
          reject(res)
        }
      })
    })
  },
  get(url,data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: data,
        header: {
          'Content-Type': 'application/json;charset=UTF-8;'
        },
        success: function (res) {
          resolve(res)
        },
        fail: function (res) {
          reject(res)
        }
      })
    })
  },

  post (url, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: data,
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          resolve(res)
        },
        fail: function (res) {
          reject(res)
        }
      })
    })
  },

  json2Form(json) {
    var str = []
    for(var p in json){
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]))
    }
    return str.join("&")
  }

};
