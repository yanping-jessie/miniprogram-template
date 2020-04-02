module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          // 先使用px2rpx把px转成rpx值，然后会根据不同屏幕比例进行换算成对应的px
          test: /\.less$/,
          use: [
            {
              loader: 'px2rpx-loader',
              options: {
                baseDpr: 1,
                rpxUnit: 0.5,
              },
            },
            {
              loader: 'less-loader',
            },
          ],
        },
      ],
    },
  },
};
