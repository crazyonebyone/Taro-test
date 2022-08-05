export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  subPackages: [
    {
      root: "cartPackages",
      pages: [
        "pages/cart/index",
        "pages/guessFavor/index"
      ]
    },
    {
      root: "pages/orderList",
      pages: [
        "index",
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
