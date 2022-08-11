// pages/my/my.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 模块
    modularList: [
      { img: "/assets/images/user/shop_order.png", text: "微店订单" },
      { img: "/assets/images/user/online_order.png", text: "优选订单" },
      { img: "/assets/images/user/address.png", text: "地址管理" },
      { img: "/assets/images/user/tel.png", text: "联系客服" },
      { img: "/assets/images/user/feedback.png", text: "意见反馈" },
    ],
    balance: 90, // 余额
  },
  goWallet() {
    wx.navigateTo({
      url: "/pages/wallet/wallet",
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
