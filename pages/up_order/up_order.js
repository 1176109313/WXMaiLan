// pages/up_order/up_order.js
var app = getApp()
var util = require('../../utils/util.js');
Page({
  data: {
    /** 特殊注释是需要发送给服务器的数据 **/
    /**服务日期 */
    date: '2019-09-01',
    /**服务执行时间 */
    time: '8:00',
    /**具体地址 */
    address:'',
    /**数量 */
    total:'',
    /**备注 */
    remarks:'',
    //服务id
    serviceId:'',
    userId:'',
    S1: '',
    S2: ''
  },
  set_address:function(){
    wx:wx.navigateTo({
      url: '../up_order/choose_address/choose_address',
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
    var d = this.data.unit*(parseInt(e.detail.value)+1)
    this.setData({
      index: e.detail.value,
      total:d
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
    var unit_price = this.data.service.unit_money;
    this.setData({
      num: e.detail.value,
      total: e.detail.value * unit_price,
    });
  },
  inputnote: function (e) {
    var value = e.detail.value;
    this.setData({
      note: e.detail.value
    });
    console.log(value)
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.S1 = options.S1;
    this.data.S2 = options.S2;
    this.initpage();
    this.initdate();
  },
  initpage:function(){

  },
  initdate:function(){
    var time = util.formatTime(new Date());
    this.setData({
      date: time
    });
  },
  //点击支付按钮
  pay:function(){
    console.log(getApp().globalData.userId);
    //判断用户是否完善身份信息
    wx.request({
      url: 'http://127.0.0.1:8080/wxuser/basicOperation/canPay',
      method: "POST",
      header: {
        'content-type': 'application/json', // 默认值
      },
      data:{
        userId: getApp().globalData.userId,
      },
      success: res => {
        console.log(res.data.data);
        if(res.data.data == 'SUCCESS'){
          //身份验证成功，发送订单信息

        }else if(res.data.data == 'FAIL'){
          //获取身份信息失败，需要完善用户身份信息

        }else{
          //res.data.data == 'FAIL'

        }
      }
    })

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
      for (var i = 0; i < this.data.type.length;i++){
        let string = "type[" + i + "].selected"
        this.setData({
          [string]: false
        })
      }
    } catch (e) {
      // Do something when catch error
    }
  },

})