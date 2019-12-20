// pages/serivce/service.js
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
    wx.cloud.init();
    const db = wx.cloud.database();
    db.collection('service').get().then(res => {
      // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
      // this.setData({
      //   address: res.data,
      // })
      var service1 = new Array()
      for(var i=0;i<res.data.length;i++){//初始化服务大类
        var name = res.data[i].服务大类
        if (service1.length==0){
          console.log(service1)
          var s = { name: res.data[i].服务大类 }
          service1.push(s)//添加第一个服务大类
        }
        var exit = -1;//判断该项是否存在
        for (var j = 0; j < service1.length; j++) {
          var index = service1[j].name.indexOf(name)
          if (index >= 0) {
            exit = 1;
          }
        }
        if (exit == -1) {//console.log('没有这个服务大类')
          var s = { name: res.data[i].服务大类 }
          service1.push(s)//添加该服务大类
        }
      }
      this.setData({
        service: service1
      })

      var tArray = new Array();  
      for (var j = 0; j < this.data.service.length; j++) {
        tArray[j] = new Array()
      }
      for (var i = 0; i < res.data.length; i++) {//初始化服务名称
        var name = res.data[i].ID
        for (var j = 0; j < this.data.service.length; j++) {
          if (res.data[i].服务大类 == this.data.service[j].name){
            //var s = { name: res.data[i].ID }
            tArray[j].push(res.data[i])//添加该服务
            break
          }
        }
      }
      this.setData({
        mArray:tArray
      })
      console.log(this.data.mArray)
      //初始化第一个服务大类的页面
      var A = this.data.mArray[0]
      this.setData({
        service2: A
      })
    })
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
    // console.log(e.currentTarget.dataset.index)
    // console.log(e.currentTarget.dataset.text)
    console.log(this.data.service2)

  },
  intent2:function(e){
    var text = e.currentTarget.dataset.text;
    var s1 = this.data.S1
    for (var i = 0; i < this.data.mArray[s1].length; i++) {
      if (text == this.data.mArray[s1][i].ID) {
        var A = this.data.mArray[i]
        this.setData({
          S2: i,
        })
        break
      }
    }
    try {
      wx.setStorageSync('service', this.data.mArray[this.data.S1][this.data.S2])
      console.log(this.data.mArray[this.data.S1][this.data.S2])
      wx.setStorageSync('url', '47.106.245.20: 8080 / work / upload / article / srvice / 家纺洗护 + A / 家纺洗护 + A.html')}
      catch (e) { }
    wx.navigateTo({
      url: '../service/service_intro/service_intro',
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