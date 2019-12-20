// pages/me/me_pages/my_intergral/my_intergral.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    signin:'',
    day: [{ day: "1", s: "1" }, { day: "2", s: "1" }, { day: "3", s: "1" }, { day: "4", s: "1" }, { day: "5", s: "1" }, { day: "6", s: "1" }, { day: "7", s: "0" }, { day: "8", s: "0" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   // initpage();//从服务器获得签到数据
    var num=70   //1000110
    var n=num.toString(2)
    console.log(n)
    for(var i=0;i<7;i++){
      var A = "day[" + i + "].s"
      this.setData({
        [A]: n[i]
      })
      var dd = new Date()
      dd.setDate(dd.getDate() - (6-i))
      var d = dd.getDate()
      var B = "day[" + i + "].day"
      this.setData({
        [B]: d
      })
    }
    var dd = new Date()
    dd.setDate(dd.getDate() + 1)
    var d = dd.getDate()
    var B = "day[" + 7 + "].day"
    this.setData({
      [B]: d
    })
    
    var j=0;
    for (var i = 0;i<6;i++){
      if(this.data.day[i].s==1){
        j++
        console.log(this.data.day[i])
      }else{
        //j=0
      }
    }
    this.setData({
      signin:j
    })
    console.log(this.data.signin)
  },
  signin: function () {

    if(this.data.day[6].s==1){
      wx.showToast({
        title: '今天已经签到，明天再来吧！', // 标题
        icon: 'none'
      })
    }else{

    //发送给服务器签到的数据
    //如果成功
    var A = "day[" + 6 + "].s"
    this.setData({
      [A]: 1
    })
    wx.showToast({
      title: '签到成功！', // 标题
      icon: 'success',  // 图标类型，默认success
      duration: 1500  // 提示窗停留时间，默认1500ms
    })
    }
  },
  intent:function(){
    wx.navigateTo({
      url: '../exchange/exchange',
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