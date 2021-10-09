// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    toBegin:function (params) {
        wx.navigateTo({
          url: '../help/help',
        })
    },
    toBegin1:function (params){
        wx.navigateTo({
          url: '../set/set',
        })
    },
    toBegin2:function (params) {
        wx.navigateTo({
          url: '../game/game',
        })
    },
    toBegin3:function (params) {
        wx.navigateTo({
          url: '../join/join',
        })
    },

    toBegin4:function (params) {
      wx.navigateTo({
        url: '../award/award',
      })
    }
})