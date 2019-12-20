// pages/up_order/up_order.js
var util = require('../../utils/util.js');
Page({
  data: {
    date: '2019-09-01',
    time: '8:00',
    address:'',
    service:{},
    total:'',
  },
  set_address:function(){
    wx:wx.navigateTo({
      url: '../up_order/choose_address/choose_address',
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  inputnum: function (e) {
    var value = e.detail.value;
    var unit_price = this.data.unit_price;
    this.setData({
      num: e.detail.value,
      total: e.detail.value * unit_price,
    });
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    try {
      wx.setStorageSync('hava_input','false1')
      wx.setStorageSync('string', '房屋面积')
      wx.setStorageSync('unit', '平方米')
      wx.setStorageSync('unit_price','6')
    } catch (e) { }

    this.initpage();
    this.initdate();
  },
  initpage:function(){
    var s = wx.getStorageSync('service')
    this.setData({
      service: s,
      total: s.advance_money
    })
    console.log(s)
    
  },
  initdate:function(){
    var time = util.formatTime(new Date());
    this.setData({
      date: time
    });
  },
  pay:function(){
    //向服务器发送支付请求

    //然后再发送以下
    wx.requestPayment({
      timeStamp: '1490940662',
      nonceStr: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
      package: 'prepay_id=wx2017033010242291fcfe0db70013231072',
      signType: 'MD5',
      paySign: 'MD5',
      success(res) { },
      fail(res) { }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    try {
      var value = wx.getStorageSync('address')
      if (value) {
        this.setData({
          address:value
        })
      }
    } catch (e) {
      // Do something when catch error
    }
  },

})