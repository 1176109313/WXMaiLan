// pages/me/me_pages/exchange/exchange.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addtell: {
     addtellHidden: true, //弹出框显示/隐藏
     pointHidden: true, 
     cc:{},
    }, 
    Exch: [{ url: "https://www.zhideedu.com/UploadFiles/img_0_3228817127_463738753_26.jpg", name: "20元优惠券", int: "300", type: "1" }, { url: "http://file.youboy.com/a/126/85/35/8/20491618.JPG", name: "纯棉毛巾", int: "500", type: "2" }, { url: "http://file.youboy.com/a/126/85/35/8/20491618.JPG", name: "纯棉毛巾", int: "600", type: "2" }],
    inte: 500,
    name: '',
    number: '',
    address: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  exchange:function(e){
    this.setData({
      addtell: {
        pointHidden: false,
        cc: e.currentTarget.dataset.text
      }
    })
  },
  modalConfirm1: function () {
    if (parseInt(this.data.addtell.cc.int) <= this.data.inte){
      //发送兑换请求到服务器
      if (this.data.addtell.cc.type == 2) {
        this.setData({
          addtell: {
            pointHidden: true,
            addtellHidden: false
          },
        })
      } 
    }else{
      wx.showToast({
        title: '积分不足！', // 标题
        icon: 'none'
      })
    }
    
    
  },
  modalConfirm2: function () {
    var that=this
    console.log(that.data.name)
    //发送物流信息到服务器
    this.setData({
      addtell: {
        addtellHidden: false
      }
    })
  },
  modalCancel: function () {
    //弹出框取消操作
    this.setData({
      addtell: {
        pointHidden: true,
        addtellHidden: true,
      }
    })
  },
  savename: function (e) {
    this.setData({
        name: e.detail.value
    })
  },
  savenumber: function (e) {
    this.setData({
        number: e.detail.value
    })
  },
  saveaddress: function (e) {
    this.setData({
        address: e.detail.value
    })
  }
})