// pages/me/me_pages/my_address/my_address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:[],
    index:0
  },
  add_address:function(){
    wx.navigateTo({
      url: '../my_address/add_address/add_address',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  init: function () {//会被调用两次，分别在onload和onshow
    wx.cloud.init();
    const db = wx.cloud.database();
    db.collection('address').get().then(res => {
      // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
      this.setData({
        address: res.data,
      })
      console.log(this.data.address)
      // var index = 1;
      // console.log(this.data.address[index].address)
    })
  
  },
  delete_address: function (e) {
    wx.cloud.init();
    const db = wx.cloud.database();
    db.collection('address').doc(e.currentTarget.dataset.id).remove({
      success: function (res) {
      }
    })
    this.init();
  },
  onLoad: function (options) {
    this.init();
  },
  onShow:function(){
    this.init();
  }

})