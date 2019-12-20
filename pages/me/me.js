// pages/me/me.js
Page({
  getPhoneNumber(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
  /**
   * 页面的初始数据
   */
  data: {
    array:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var array = this.initData();
    this.setData({array: array});
  },
  initData:function(){
    var array = [];
    var object1 = new Object();
    object1.img = '../static/img/lsdd.png';
    object1.text = '我的订单';
    array[0] = object1;

    var object2 = new Object();
    object2.img = '../static/img/wdwz.png';
    object2.text = '我的地址';
    array[1] = object2;

    var object3 = new Object();
    object3.img = '../static/img/wdyh.png';
    object3.text = '我的红包';
    array[2] = object3;

    var object4 = new Object();
    object4.img = '../static/img/wdjf.png';
    object4.text = '我的积分';
    array[3] = object4;

    var object5 = new Object();
    object5.img = '../static/img/yjfk.png';
    object5.text = '意见反馈';
    array[4] = object5;

    var object6 = new Object();
    object6.img = '../static/img/yjfk.png';
    object6.text = '测试';
    array[5] = object6;

    return array;
  },
  intent:function(e){
    var text =e.currentTarget.dataset.text;
    if(text=="我的订单"){
      wx.navigateTo({
        url:'../me/me_pages/my_order/my_order',
      })
    }
    if (text == "我的地址") {
      wx.navigateTo({
        url: '../me/me_pages/my_address/my_address',
      })
    }
    if (text == "我的红包") {
      wx.navigateTo({
        url: '../me/me_pages/my_redpacket/my_redpacket',
      })
    }
    if (text == "我的积分") {
      wx.navigateTo({
        url: '../me/me_pages/my_intergral/my_intergral',
      })
    }
    if (text == "意见反馈") {
      wx.navigateTo({
        url: '../me/me_pages/my_advice/my_advice',
      })
    }
    if (text == "测试") {
      wx.request({
        url: '47.106.245.20:8080/work/upload/article/service/a+A/a+A.html', //仅为示例，并非真实的接口地址
        
        success(res) {
          console.log(res.data)
        }
      })

      //this.online()
    }
  },
  online: function () {
    let socketOpen = false
    var socketMsgQueue = ['w', 'g', 's', 'b']
    wx.connectSocket({
      url: 'ws://127.0.0.1:8888/by',
      method: 'GET',
      success: function () {
        isCount: true
        console.log('成功连接')
      },
      fail: function () {
        isCount: false
        console.log('连接失败')
      }
    })

    wx.onSocketOpen(function (res) {
      console.log('回调')
      socketOpen = true
      for (let i = 0; i < socketMsgQueue.length; i++) {
        sendSocketMessage(socketMsgQueue[i])
      }
      socketMsgQueue = []
    })
    wx.onSocketMessage(function (res) {
      console.log('服务器：' + res.data)
    })
    function sendSocketMessage(msg) {
      if (socketOpen) {
        wx.sendSocketMessage({
          data: msg
        })
      } else {
        socketMsgQueue.push(msg)
      }
    }
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