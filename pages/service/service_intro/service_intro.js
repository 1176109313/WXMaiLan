// pages/service/service_intro/service_intro.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    html: '',
    S1:'',
    S2:''
  },
  as:function(){
    var content = ''
    var content = app.globalData.code

    var str = "http://47.106.245.20:8080/work/upload/article/service/" + "2";
    var patt1 = /<img src="(.)\/(\d+?)(.jpg)|(.png)|(.jpeg)|(.gif)"/g

    content = content.replace(patt1, "<img src=\"" + "http://47.106.245.20:8080/work/upload/article/service/" + "2" + "\/$2$3").replace(/'/g, "\\\'");

    console.log(content)
    this.setData({
      html:content
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.S1),
    console.log(getApp().globalData.service[options.S1][options.S2]),
    this.data.S1 = options.S1;
    this.data.S2 = options.S2;
    this.as()
  },
  //点击支付按钮是调用
  appoint:function(){
    wx.redirectTo({
      url: '../../up_order/up_order?S1=' + this.data.S1 + '&S2=' + this.data.S2,
    })
  },
  parser: function (e) {
    console.log(e);
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