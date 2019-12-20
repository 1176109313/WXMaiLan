// pages/me/me_pages/my_order/my_order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order:[],
    sex:'man',
    color:'blue',
    addtell: {
      hidden: true, //弹出框显示/隐藏
      score: [3, 4, 3, 4, 3, 4, 3, 4, 3, 4],
      grade: 0,
    }, 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      order: [{ state: '待接单', name: '日常保洁', sex: "男", phonenumber: "15689986568" }, { state: '进行中', name: '日常保洁', sex: "男", phonenumber: "15689986568" }, { state: '已完成', name: '日常保洁', sex: "女", phonenumber: "15689986568" }, { state: '待补款', name: '精细保洁', sex: "女", phonenumber: "15689986568" }]
    })
    this.initcolor();
  },
  initcolor:function(){
    let that = this
    for (var j = 0; j < that.data.order.length; j++) {
      if (that.data.order[j].state == '进行中') {
        var color = "order[" + j + "].color";
        var visable = "order[" + j + "].visiable";
        this.setData({
          [color]: '#3e96ef'
        })
      } else if (that.data.order[j].state == '已完成'){
        var color = "order[" + j + "].color";
        var visable = "order[" + j + "].visiable";
        this.setData({
          [color]: 'green'
        })
      } else if (that.data.order[j].state == '待接单' || that.data.order[j].state == '待补款') {
        var color = "order[" + j + "].color";
        var visable = "order[" + j + "].visiable";
        this.setData({
          [color]: 'red'
        })
      }
    }
    console.log(that.data.order)
  },
  revocation_order:function(){//取消订单
    wx.showModal({
      title:'温馨提示',
      confirmText:'确认',
      cancelText:'我再想想',
      content: '您确定要取消该订单吗？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  call:function(e){
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phonenumber
    })
  },
  gomap:function(){//查看师傅位置
    wx.navigateTo({
      url: '../../../map/map',
    })
  },
  review:function(){//评分
    this.setData({
      addtell: {
        hidden: false, //弹出框显示/隐藏
        score: [3, 4, 3, 4, 3, 4, 3, 4, 3, 4],
        grade: 0
      },
    })
  },
  detail:function(){//跳转页面查看细节
    wx.navigateTo({
      url: 'fill_money/fill_money',
    })
  },
  Confirm:function(){//评分确认

    var grade = this.data.addtell.grade
    //发送分数到服务器
    console.log('评分为：'+grade)
    

    this.setData({
      addtell: {
        hidden: true
      },
    })
  },
  Cancel:function(){
    this.setData({
      addtell: {
        hidden: true
      },
    })
  },
  log: function (e) {
    var index = e.currentTarget.dataset.index;
    console.log(index)
    var s = new Array();
    for (var i = 0; i < 10; i++) {
      if (i <= index) {
        if (i % 2 == 1) {
          s[i] = 2
        } else if (i % 2 == 0) {
          s[i] = 1
        }
      } else {
        if (i % 2 == 1) {
          s[i] = 4
        } else if (i % 2 == 0) {
          s[i] = 3
        }
      }
    }
    this.setData({
      addtell: {
        hidden: false, //弹出框显示/隐藏
        score: s,
        grade: index + 1
      },
    })
  },


})