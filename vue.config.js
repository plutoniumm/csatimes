const path = require( 'path' )
const webpack = require( 'webpack' )

const version = require( './package.json' ).version
const timeStamp = new Date().toUTCString()

const getLastCommitHash = () => {
  const hash = require( 'child_process' ).execSync( 'git rev-parse HEAD' )
    .toString()

  return hash.slice( 0, 6 )
}

const lintOnSave = true

module.exports = {
  lintOnSave,
  transpileDependencies: [
    'vuestic-ui',
  ],
  pages: {
    index: {
      entry: 'src/app/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'CSATimes',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': path.resolve( 'src' ),
      },
    },
    plugins: [
      new webpack.DefinePlugin( {
        VERSION: JSON.stringify( version ),
        TIMESTAMP: JSON.stringify( timeStamp ),
        COMMIT: JSON.stringify( getLastCommitHash() ),
      } ),
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "~vuestic-ui/src/components/vuestic-sass/resources/resources.scss";',
      },
    },
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker.js',
      importWorkboxFrom: 'local',
    },
  },
}
