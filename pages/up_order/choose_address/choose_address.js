// pages/up_order/choose_address/choose_address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: [], 
  },
  add_address: function () {
    wx.navigateTo({
      url: '../add_address/add_address',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  init: function () {
    wx.cloud.init();
    const db = wx.cloud.database();
    db.collection('address').get().then(res => {
      // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
      this.setData({
        address: res.data,
      })
    })
  },
  choose_address:function(e){
    console.log(e.currentTarget.dataset.text);
    try {
      wx.setStorageSync('address',e.currentTarget.dataset.text)
    } catch (e) { }
    wx.navigateBack({
      delta:1
    })
  },
  add_address: function () {
    wx.navigateTo({
      url: '/pages/me/me_pages/my_address/add_address/add_address',
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
    this.init();
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