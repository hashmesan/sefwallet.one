const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
require("@babel/polyfill");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {GitRevisionPlugin} = require('git-revision-webpack-plugin');
const gitRevisionPlugin = new GitRevisionPlugin();
var webpack = require("webpack")

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, '.'),
    compress: false,
  },
    node: {
        fs: 'empty',
        child_process: 'empty',
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.css?$/,
            use: ['css-loader'],
          },          
        ],
      },
    entry: {
      main: ['@babel/polyfill', './src/info.tsx'],
      guardian: ['@babel/polyfill', './src/guardian.tsx'],
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./info.html",
          minify: false,
          chunks: ['main'],
          filename: "info.html"
        }),
        new HtmlWebpackPlugin({
          template: "./info.html",
          minify: false,
          chunks: ['guardian'],
          filename: "guardian.html"
        }),
        new webpack.DefinePlugin({
          'VERSION': JSON.stringify(gitRevisionPlugin.version()),
          'COMMITHASH': JSON.stringify(gitRevisionPlugin.commithash()),
          'BRANCH': JSON.stringify(gitRevisionPlugin.branch()),
          'LASTCOMMITDATETIME': JSON.stringify(gitRevisionPlugin.lastcommitdatetime()),
        }),
        // Copy our app's index.html to the build folder.
        new CopyWebpackPlugin([
//            { from: './src/index.html', to: "index.html" },
//            { from: './js', to: "./js" },
           { from: './images', to: "./images" },
            //{ from: './public', to: "./public" },
            { from: './CNAME', to: "." },  // to prevent github resetting our domain 
          ])
    ]
};
