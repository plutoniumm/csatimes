module.exports = {
  runtimeCompiler: true,
  transpileDependencies: [
    'vuestic-ui',
  ],
  pages: {
    index: {
      entry: 'src/app/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'CSATimes',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ],
    },
  }
}
