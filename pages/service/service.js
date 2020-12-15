// pages/serivce/service.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    service:[],
    service2:[],
    multiArray: [['s', ],],
    mArray: [[]],
    item_service1:[],
    item_service2: [],
    key:0,
    S1:0,
    S2:0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initservice();
  },
  initservice:function(){
    this.getservice();
  },
  getservice:function(){
    //获取一级服务
    wx.request({
      url: 'http://' + getApp().globalData.ip+':8080/user/serviceOperation/getServiceFirst',
      method: "POST",
      header: {
        'content-type': 'application/json', // 默认值
      },
      success: res => {
        var service1 = new Array()
        for (var i = 0; i < res.data.list.length; i++) {//初始化服务大类
          service1.push(res.data.list[i]);
        }
        console.log(service1)
        this.setData({
          service: service1
        });
        var tArray = new Array()
        var appArray = new Array() 
        //获取二级服务
        wx.request({
          url: 'http://' + getApp().globalData.ip+':8080/user/serviceOperation/getService',
          method:"POST",
          header: {
            'content-type': 'application/json', // 默认值
          },
          success: res => {
            var mapList = res.data.mapList;
            for (let k of service1){
              let serviceId = k.id;
              console.log(mapList[serviceId]);
              appArray.push(mapList[serviceId]);
              tArray.push(mapList[serviceId]);
            }
            this.setData({
              mArray: tArray
            })
            app.globalData.service = appArray
            //初始化第一个服务大类的页面
            var A = this.data.mArray[0]
            this.setData({
              service2: A
            })
          }
        })
      }
    });
  },
  
  intent: function (e) {
    var text = e.currentTarget.dataset.text;
    for (var i = 0; i < this.data.service.length;i++){
      if (text == this.data.service[i].name) {
        var A=this.data.mArray[i]
        //console.log(this.data.mArray[i])
        this.setData({
          service2:A,
          S1:i,
        })
        break
      }
    }
    this.setData({ key: e.currentTarget.dataset.index, });
  },
  intent2:function(e){
    // console.log(e)
    // wx.request({
    //   url: 'http://' + getApp().globalData.ip +':8080/html/'+e.currentTarget.dataset.text+'.html',
    //   data: {
    //     type: '1',
    //     serviceId:'2'
    //   },
    //   success: res => {
    //     console.log(res.data)
    //     app.globalData.code = res.data
    //   },
    // })
    var text = e.currentTarget.dataset.text;
    var s1 = this.data.S1
    for (var i = 0; i < this.data.mArray[s1].length; i++) {
      if (text == this.data.mArray[s1][i].id) {
        var A = this.data.mArray[i]
        this.setData({
          S2: i,
        })
        break
      }
    }
    wx.navigateTo({
      url: '../service/service_intro/service_intro?S1='+this.data.S1+'&S2='+this.data.S2,
    })
  },
  changColor:function(e){
    this.setData({ key: e.currentTarget.dataset.index})
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