// pages/supliertype/supliertype.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    name: null,
    num: 0,
    list: [
      {
        name: '夯土',
        list: [
          {
            name: '玉米收割机345',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          }
        ]
      },
      {
        name: '夯土夯土夯土夯土',
        list: [
          {
            name: '玉米收割机ertt',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          }
        ]
      },
      {
        name: '夯土',
        list: [
          {
            name: '玉米收割机2et',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          }
        ]
      },
      {
        name: '夯土',
        list: [
          {
            name: '玉米收割机3wrwrw',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          }
        ]
      },
      {
        name: '夯土',
        list: [
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机wrwr',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机wr',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          }
        ]
      },
      {
        name: '夯土',
        list: [
          {
            name: '玉米收割机5werw',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          }
        ]
      },
      {
        name: '夯土',
        list: [
          {
            name: '玉米收割机eerr',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          },
          {
            name: '玉米收割机',
            url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            size: '30*2.5m（可定制）',
            base: '无需',
            scale: '20',
            factory: '百花农业科技有限公司'
          }
        ]
      }
    ]
  },
  changeTab (e) {
    this.setData({
      num: e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { name, id } = JSON.parse(options.item)
    this.setData({
      id,
      name
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})