// pages/order/order.js
Page({
  /**
   * 页面的初始数据
   */

  data: {
    ellipsis: true, // 文字是否收起，默认收起
    orderList: [], // 接受参数
    totalPrice: 0, // 计算总价
    endPrice: 0, // 最终支付
    isChecked: true, // 默认不选择
    balance: 90, // 余额
    balanceText: "余额减扣", // 余额减扣模块文字描述
    Discount: "￥-", // 余额减扣的优惠金额
  },
  // 展开 收起
  ellipsis: function () {
    this.setData({
      ellipsis: !this.data.ellipsis,
    })
  },
  // 开关状态改变
  changeSwitch(e) {
    // console.log(e.detail.value)
    // 获取switch的value值 (false/true)
    const status = e.detail.value
    // Switch未选中 未使用优惠券
    if (!status) {
      const price1 = this.data.totalPrice
      this.setData({
        balanceText: "未使用优惠",
        Discount: "",
        endPrice: price1,
      })
    } else {
      // Switch选中 使用优惠券
      const price2 = this.data.totalPrice - this.data.balance
      this.setData({
        balanceText: "余额减扣",
        Discount: "￥-" + this.data.balance,
      })

      if (price2 <= 0) {
        // 未使用优惠券时 如果最终支付为-负数 则实际支付为0
        this.setData({
          endPrice: 0,
          Discount: "￥-" + this.data.totalPrice,
        })
      } else {
        this.setData({
          endPrice: price2,
        })
      }
    }
    // 未使用优惠券 最终的实际支付
    // if (!status) {
    // console.log(price1)
    // this.setData({})
    // } else {
    // 使用优惠券 最终的实际支付
    // console.log(price2)
    // }
  },
  // payment() {
  //   wx.requestPluginPayment({
  //     version: "release",
  //     fee: 1,
  //     paymentArgs: {},
  //     currencyType: "CNY",
  //     success(res) {},
  //     fail(res) {},
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(options.totalPrice, "options")
    // 获取商品列表
    this.setData({
      orderList: JSON.parse(options.dataList),
    })
    // 获取总价
    this.setData({
      totalPrice: JSON.parse(options.totalPrice),
    })
    // 最终支付价格
    this.setData({
      endPrice: JSON.parse(options.totalPrice) - this.data.balance,
    })
    // 默认选择优惠减额
    this.setData({
      balanceText: "余额减扣",
      Discount: "￥-" + this.data.balance,
    })
    // 默认实际支付
    const price2 = this.data.totalPrice - this.data.balance
    // 实际支付为-负数 则实际支付为0
    if (price2 <= 0) {
      this.setData({
        endPrice: 0,
        Discount: "￥-" + this.data.totalPrice,
      })
    } else {
      this.setData({
        endPrice: price2,
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},
  // 更改Switch

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
