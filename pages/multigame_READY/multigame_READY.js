// pages/game/game.js
Page({
    /**
     * 页面的初始数据
     */   
    data: {
      value: 1,
      msg:'什么都没有',
      one_image:'../image/6_point.png',
      two_image:'../image/6_point.png',
      three_image:'../image/6_point.png',
      four_image:'../image/6_point.png',
      five_image:'../image/6_point.png',
      six_image:'../image/6_point.png',
      flag:true,
      list:[
        0,
        0,
        0,
        0,
        0,
        0,
      ],
      arr:[
        '../image/1_point.png',
        '../image/2_point.png',
        '../image/3_point.png',
        '../image/4_point.png',
        '../image/5_point.png',
        '../image/6_point.png',
      ]
    },
    toBegin1:function (params) {
      wx.navigateTo({
        url: '../home/home',
      })
    },
    go:function (params) {
        wx.navigateTo({
          url: '../multigame_pl1/multigame_pl1',
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