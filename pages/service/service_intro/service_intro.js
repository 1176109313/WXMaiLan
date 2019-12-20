// pages/service/service_intro/service_intro.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    html: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'url',
      success(res) {
        console.log(res.data)
      }
    }),
      wx.getStorage({
        key: 'AA',
        success(res) {
          console.log(res.data)
        }
      }),
    this.setData({
      html: '<p style="text-align: center;">    <strong><br/></strong></p><p style="text-align: center;">    <strong>文字</strong></p><p>    <br/></p><section class="_135editor" data-tools="135编辑器" data-id="93521" style="border: 0px none;">    <section style="display: flex;justify-content: flex-end;margin-top:-21px;">        <section class="_135editor" data-tools="135编辑器" data-id="94534" style="border: 0px none;">            <section style="width:95%;margin:20px auto;" data-width="95%">                <section style="box-shadow: 0px 2px 10px #a9cfd5;">                    <section style="display: flex;justify-content: space-between;align-items: center;padding: 10px 5px;">                        <section style="display: inline-block;width: 25px;">                            <section style="width:0.8em;height:0.8em;background: #85b5bc;border-radius:100% ;opacity: 0.6;margin: 0px auto -8px auto;transform: rotate(0deg);-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-o-transform: rotate(0deg);"></section>                            <section style="width:5px;height:1.4em;background:#a9cfd5;border-radius:6px ;margin: 0px auto;"></section>                        </section>                        <section style="display: inline-block;width: 25px;">                            <section style="width:0.8em;height:0.8em;background: #85b5bc;border-radius:100% ;opacity: 0.6;margin: 0px auto -8px auto;transform: rotate(0deg);-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-o-transform: rotate(0deg);"></section>                            <section style="width:5px;height:1.4em;background:#a9cfd5;border-radius:6px ;margin: 0px auto;"></section>                        </section>                    </section>                    <section style="padding:0.2em 1em;">                        <section data-autoskip="1" class="135brush" style="font-size: 14px;text-align: justify;letter-spacing: 1.5px;line-height: 1.75em;color:#4d909a;padding:0em 1em;">                            <p>                                轻轻走过，悄悄看过，无意瞥一眼惊鸿的颜色，随着巷口的老猫湮没在无声中，爱这巷，爱这楼阁，爱这轻缓的脚步，落在石板上的踢踏，喜欢看你的身ing:0em 1em;">                            <p>                                轻轻走过，悄悄看过，无意瞥一眼惊鸿的颜色，随着巷口的老猫湮没在无声中，爱这巷，爱这楼阁，爱这轻缓的脚步，落在石板上的踢踏，喜欢看你的身ing:0em 1em;">                            <p>                                轻轻走过，悄悄看过，无意瞥一眼惊鸿的颜色，随着巷口的老猫湮没在无声中，爱这巷，爱这楼阁，爱这轻缓的脚步，落在石板上的踢踏，喜欢看你的身ing:0em 1em;">                            <p>                                轻轻走过，悄悄看过，无意瞥一眼惊鸿的颜色，随着巷口的老猫湮没在无声中，爱这巷，爱这楼阁，爱这轻缓的脚步，落在石板上的踢踏，喜欢看你的身影随我远去，目光牵着你的笑，飞洒的柳絮勾勒你的轮廓，在茫茫烟波中，你留下残红染了梅花，在渺渺云雾中。                            </p>                        </section>                    </section>                         </section>    </section></section><p>    <br/></p>'
    })
  },
  appoint:function(){
    wx.redirectTo({
      url: '../../up_order/up_order',
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