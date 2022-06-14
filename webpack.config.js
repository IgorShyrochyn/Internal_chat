const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  return {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist')
    },
    mode: argv.mode ? argv.mode : 'production',
    module: {
      rules: [
        {
          test: /\.?js[x]?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.join(__dirname, 'public', 'index.html') })
    ],
    devServer: {
      port: 3000,
      open: true,
      client: {
        reconnect: true
      },
      historyApiFallback: true
    }
  };
};
