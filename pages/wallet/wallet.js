// pages/wallet/wallet.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    money: [
      { money: 0.1, text: "充10元送1元" },
      { money: 20, text: "充20元送2元" },
      { money: 50, text: "充50元送5元" },
      { money: 100, text: "充100元送10元" },
    ],
  },
  goDetailed() {
    wx.navigateTo({
      url: "/pages/detail/detail",
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
})
