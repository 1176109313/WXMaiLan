// pages/Test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addtell: {
      hidden: true, //弹出框显示/隐藏
      score: [3, 4, 3, 4, 3, 4, 3, 4, 3, 4],
      grade: 0,
    }, 
  },
  log:function(e){
    var index = e.currentTarget.dataset.index;
    console.log(index)
    var s=new Array();
    for(var i=0;i<10;i++){
      if(i<=index){
        if(i%2==1){
          s[i] = 2
        }else if(i%2==0){
          s[i] = 1
        }
      }else{
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
      score:s,
      grade:index+1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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