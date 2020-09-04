// pages/me/me_pages/my_address/my_address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',//输入的具体地址
    mArray: [['山东省'], ['济南市'], ['市中区', '历下区', '天桥区', '槐荫区', '历城区', '长清区', '章丘区', '莱芜区', '钢城区', '济阳区', '平阴县', '商河县']],
    multiIndex: [0, 0, 0],
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  save_address(){
    wx.cloud.init();
    const db = wx.cloud.database();
    
     //这里 把地址发送给服务器，得到区域编号（m,n）
     
    db.collection('address').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        address: this.data.mArray[1][this.data.multiIndex[1]] + this.data.mArray[2][this.data.multiIndex[2]] + this.data.inputValue,
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      }
    })
    wx.navigateBack({
      delta:1
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

})