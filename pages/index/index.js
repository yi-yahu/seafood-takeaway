//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    height: 1000,
    goods: [

      {
        id: 1,
        name: "建国",
        foods: [
          {
            icon: "../../asset/tabBar/address.png",
            name: "猪饲料1",
            description: "很好吃",
            sellCount: 10,
            rating: 10,
            price: 15,
            oldPrice: 30,
            count: 0
          },
          {
            icon: "../../asset/tabBar/address.png",
            name: "猪饲料2",
            description: "很好吃",
            sellCount: 10,
            rating: 10,
            price: 15,
            oldPrice: 30,
            count: 0
          }, {
            icon: "../../asset/tabBar/address.png",
            name: "猪饲料3",
            description: "很好吃",
            sellCount: 10,
            rating: 10,
            price: 15,
            oldPrice: 30,
            count: 0
          }, {
            icon: "../../asset/tabBar/address.png",
            name: "猪饲料4",
            description: "很好吃",
            sellCount: 10,
            rating: 10,
            price: 15,
            oldPrice: 30,
            count: 0
          }
        ]
      },
      {
        id: 2,
        name: "海鲜",
        foods: [
          {
            icon: "../../asset/tabBar/address.png",
            name: "海鲜1",
            description: "很好吃",
            sellCount: 13,
            rating: 10,
            price: 25,
            oldPrice: 10,
            count: 0
          }, {
            icon: "../../asset/tabBar/address.png",
            name: "海鲜2",
            description: "很好吃",
            sellCount: 13,
            rating: 10,
            price: 25,
            oldPrice: 10,
            count: 0
          }, {
            icon: "../../asset/tabBar/address.png",
            name: "海鲜3",
            description: "很好吃",
            sellCount: 13,
            rating: 10,
            price: 25,
            oldPrice: 10,
            count: 0
          }, {
            icon: "../../asset/tabBar/address.png",
            name: "海鲜4",
            description: "很好吃",
            sellCount: 13,
            rating: 10,
            price: 25,
            oldPrice: 10,
            count: 0
          }
        ]
      }
    ],
    toView: 'a',
    scrollTop: 100,
    // foodCounts: 0,
    totalPrice: 0, // 总价格
    totalCount: 0, // 总商品数
    carArray: [], //购物车
    minPrice: 20, //起送价格
    payDesc: '',
    deliveryPrice: 4, //配送费
    fold: true,
    cartShow: 'none',
    listShow: false,
    status: 0
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        this.getUserInfo(res);
      }
    })
    var thah = this
    var query = wx.createSelectorQuery();
    query.select('.shopCart').boundingClientRect(function (rect) {
      console.log(rect)
      thah.setData({
        height: rect.top-50
      })
    }).exec();
  },

  //获取用户信息
  getUserInfo: function (res) {
    if (res.authSetting['scope.userInfo']) {
      // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
      wx.getUserInfo({
        success: res => {
          app.data.userInfo = res.userInfo
          this.setData({
            payDesc: this.payDesc(),
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    } else {
      wx.navigateTo({
        url: '/pages/login/login',
      });
    }
  },

  selectMenu: function (e) {
    var index = e.currentTarget.dataset.itemIndex;
    console.log(index)
    this.setData({
      toView: 'order' + index.toString()
    })
  },

  //移除商品
  decreaseCart: function (e) {
    var index = e.currentTarget.dataset.itemIndex;
    var parentIndex = e.currentTarget.dataset.parentindex;
    this.data.goods[parentIndex].foods[index].count--;
    var num = this.data.goods[parentIndex].foods[index].count;
    var mark = 'a' + index + 'b' + parentIndex;
    this.data.carArray.forEach(item => {
      if (item.mark == mark) {
        item.num--;
      }
    });
    var carArray1 = this.data.carArray.filter(item => item.num != 0);
    this.setData({
      carArray: carArray1,
      goods: this.data.goods
    })
    this.calTotalPrice()
    this.setData({
      payDesc: this.payDesc(),
    })
    //关闭弹起
    var count1 = 0
    for (let i = 0; i < carArray1.length; i++) {
      if (carArray1[i].num == 0) {
        count1++;
      }
    }
    if (count1 == carArray1.length) {
      if (num == 0) {
        this.setData({
          cartShow: 'none',
          listShow: false
        })
      }
    }
  },

  //添加到购物车
  addCart(e) {
    var index = e.currentTarget.dataset.itemIndex;
    var parentIndex = e.currentTarget.dataset.parentindex;
    this.data.goods[parentIndex].foods[index].count++;
    var num = this.data.goods[parentIndex].foods[index].count;
    var name = this.data.goods[parentIndex].foods[index].name;
    var mark = 'a' + index + 'b' + parentIndex;
    var flag = true;
    this.data.carArray.forEach(item => {
      if (item.mark == mark) {
        flag = false;
        item.num++;
      }
    });
    if (flag) {
      var price = this.data.goods[parentIndex].foods[index].price;
      var obj = {
        price: price,
        num: num,
        mark: mark,
        name: name,
        index: index,
        parentIndex: parentIndex
      };
      this.data.carArray.push(obj)
    }
    this.setData({
      carArray: this.data.carArray,
      goods: this.data.goods
    })
    this.calTotalPrice();
    this.setData({
      payDesc: this.payDesc()
    })
  },

  //计算总价
  calTotalPrice: function () {
    var carArray = this.data.carArray;
    var totalPrice = 0;
    var totalCount = 0;
    for (var i = 0; i < carArray.length; i++) {
      totalPrice += carArray[i].price * carArray[i].num;
      totalCount += carArray[i].num
    }
    this.setData({
      totalPrice: totalPrice,
      totalCount: totalCount,
      //payDesc: this.payDesc()
    });
  },

  //差几元起送
  payDesc:function() {
    if (this.data.totalPrice === 0) {
      return `￥${this.data.minPrice}元起送`;
    } else if (this.data.totalPrice < this.data.minPrice) {
      let diff = this.data.minPrice - this.data.totalPrice;
      return '还差' + diff + '元起送';
    } else {
      return '去结算';
    }
  },

  //結算
  pay:function() {
    if (this.data.totalPrice < this.data.minPrice) {
      return;
    }
    app.data.carArray=this.data.carArray
    app.data.totalPrice= this.data.totalPrice
    app.data.totalCount=this.data.totalCount
    //确认支付逻辑
    wx.navigateTo({
      url: "/pages/confirmOrder/confirmOrder"
    })
  },

  //弹起购物车
  toggleList: function () {
    if (!this.data.totalCount) {
      return;
    }
    this.setData({
      fold: !this.data.fold,
    })
    var fold = this.data.fold
    this.cartShow(fold)
  },

  cartShow: function (fold) {
    console.log(fold);
    if (fold == false) {
      this.setData({
        cartShow: 'block',
        listShow: true
      })
    } else {
      this.setData({
        cartShow: 'none',
        listShow: false
      })
    }
    console.log(this.data.cartShow);
  },

  hideList: function () {
    this.setData({
      fold: true,
      cartShow: 'none',
      listShow: false
    })
  },

  //清空购物车
  empty: function () {
    console.log("carArray: ", this.data.carArray)
    for (var i = 0; i < this.data.carArray.length; i++) {
      if (this.data.carArray[i].num > 0) {
        this.data.goods[this.data.carArray[i].parentIndex].foods[this.data.carArray[i].index].count = 0;
      }
    }
    this.setData({
      carArray: [],
      goods: this.data.goods,
      totalCount: 0,
      totalPrice: 0,
      cartShow: 'none',
      listShow: false
    })
  },

  //选择 “商品”、“评论”、“商家”
  tabChange: function (e) {
    var showtype = e.target.dataset.type;
    this.setData({
      status: showtype,
    });
  }

})
