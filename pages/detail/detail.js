const app = getApp()
Page({
  data: {
    currentIndex: 0, //默认是活动项
    result: [
      {
        resultText: "充值失败",
        resultMoney: 1.1,
        time: "2018-05-23 11:25:16",
        endMonet: 0.1,
      },
      {
        resultText: "充值成功",
        resultMoney: 1.1,
        time: "2018-04-11 10:33:27",
        endMonet: 0.1,
      },
      {
        resultText: "充值成功",
        resultMoney: 1.1,
        time: "2018-04-10 22:22:50",
        endMonet: 0.1,
      },
      {
        resultText: "充值成功",
        resultMoney: 1.1,
        time: "2018-04-10 21:33:16",
        endMonet: 0.1,
      },
      {
        resultText: "充值成功",
        resultMoney: 1.1,
        time: "2018-03-23 18:25:15",
        endMonet: 0.1,
      },
    ],
  },
  // 切换swiper-item触发bindchange事件
  pagechange: function (e) {
    // 通过touch判断，改变tab的下标值
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.currentIndex
      currentPageIndex = (currentPageIndex + 1) % 2
      // 拿到当前索引并动态改变
      this.setData({
        currentIndex: currentPageIndex,
      })
    }
  },

  //点击tab时触发
  titleClick: function (e) {
    this.setData({
      //拿到当前索引并动态改变
      currentIndex: e.currentTarget.dataset.idx,
    })
  },
})
