const path = require("path");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");

dotenv.config();
const { CLIENT_PORT, SERVER_PORT } = process.env;

const mode = process.env.NODE_ENV; // our environment variables are accessible via process.env
// the && here means run both of these commands (order matters) in package json
// console.log('mode set by environment variable: ', mode);

module.exports = {
  // TODO: use brackets if you need multiple entry points (When would we use multiple entry points?)
  // Fix for regenerator-runtime issue
  entry: ["regenerator-runtime/runtime.js", "./src/client/index.jsx"],
  // NOTE: webpack will create the build directory for us
  // TODO: check if there's any point to having publicPath in output
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  mode,
  // Production compresses the data, not typical in development, Changing to development
  // allows us to then use webpack dev server that enables hot reloading
  // NOTE: you could have rules for different modules, but here we're applying the same
  // rule everywhere
  devServer: {
    host: "localhost",
    port: CLIENT_PORT,
    // enable HMR on the devServer
    hot: true,
    // // fallback to root for other urls
    // historyApiFallback: true,

    static: {
      // match the output path
      directory: path.resolve(__dirname, "dist"), // If we are running development mode, we are ignoring the output: {} method and just serve the static path.
      // match the output 'publicPath'
      publicPath: "/",
    },
    proxy: {
      // uncomment the proxy method to allow the frontend to communicate with the proxy
      "/api": `http://localhost:${SERVER_PORT}/`,
    },
  },
  // NOTE: resolve allows you to not have to specify file extensions when importing
  //TODO: figure out if i should have a src directory
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  // TODO: look into modules more (is our app one module? what exactly happens when we
  // exclude node_modules?)
  module: {
    rules: [
      {
        // NOTE: we use a regex to find js or jsx files
        // alternative: /\.jsx?/
        // NOTE: we want to exclude the node_modules since we believe that
        // they already include a minified and uglified file in their dist directory
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        // The definition says css-loader interprets @import and url() like import/require()
        // and will resolve them. What do we mean by this? css-loader will take all the CSS from
        // the CSS file and generate it to a single string and will pass this to style-loader.
        // style-loader will take this string and will embed it in the style tag in index.html.
        test: /.(css)$/,
        exclude: /node_modules/, // webpack is aware of the minified, uglified js and knows to grab that file, so we can exclude it here
        use: ["style-loader", "css-loader", "postcss-loader"], // order by which you place your css loaders matters //
      },
      // {
      //   test: /\.png$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       mimetype: 'image/png',
      //     },
      //   }],
      // },
      {
        test: /\.png|svg|jpe?g|gif/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    // HtmlWebpackPlugin will take the bundle.js file and insert it inline into a
    // index.html file inside the dist/build directory. You can pass in a template page
    new HtmlWebpackPlugin({
      template: "./src/client/index.html", // yes, htmlWebpack only works in development// index html is placed in root in RAM because it is a feature of setting the mode as development.
    }),
  ],
};
