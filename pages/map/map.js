Page({
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    client_lon:'',
    client_lat:'',

    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      title: '师傅当前位置',
      height: 50
    }],
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
    this.moveToLocation
   // this.mapCtx = wx.createMapContext('myMap')
  },

  includePoints: function () {//显示师傅位置

    //发送给服务器请求得到师傅的地址
    
  
    this.mapCtx.includePoints({
      padding: [10],
      points: [{//师傅的位置
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {//客户的位置
        latitude: this.data.client_lat,
        longitude: this.data.client_lon,
      }]
    })
    console.log(this.data.client_lat)
  },
  moveToLocation: function () {//移动位置
    this.mapCtx.moveToLocation()
    let that = this
    this.mapCtx.getCenterLocation({
      success: function (res) {
        that.setData({
          client_lon: res.longitude,
          client_lat: res.latitude,
        })
      },
    })
  },
  onLoad: function () {
  },
})
