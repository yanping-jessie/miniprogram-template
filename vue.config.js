const vconsoleWebpackPlugin = require('vconsole-webpack-plugin');

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
    plugins: [
      new vconsoleWebpackPlugin({
        enable: process.env.NODE_ENV === 'development',
      }),
    ],
  },
  devServer: {
    // 这里可以添加本地配置域名，方便调试需要域名白名单的功能，比如微信授权、微信分享等
    allowedHosts: [
      '.shiguangkey.com',
    ]
  }
};
