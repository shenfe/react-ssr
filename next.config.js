module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: [
    //     require.resolve('style-loader'),
    //     {
    //       loader: require.resolve('css-loader'),
    //       options: {
    //         importLoaders: 1,
    //       },
    //     },
    //     {
    //       loader: require.resolve('postcss-loader'),
    //       options: {
    //         // Necessary for external CSS imports to work
    //         // https://github.com/facebookincubator/create-react-app/issues/2677
    //         ident: 'postcss',
    //         plugins: () => [
    //           require('postcss-flexbugs-fixes'),
    //           require('autoprefixer')({
    //             browsers: [
    //               '>1%',
    //               'last 4 versions',
    //               'Firefox ESR',
    //               'not ie < 9', // React doesn't support IE8 anyway
    //             ],
    //             flexbox: 'no-2009',
    //           }),
    //         ],
    //       },
    //     },
    //   ],
    // })

    return config
  }
}
