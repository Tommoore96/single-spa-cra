const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "i6",
    projectName: "single-spa-cra",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    devServer: {
      disableHostCheck: true,
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      // },
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
        // {
        //   test: /\.css$/i,
        //   use: ["style-loader", "css-loader"],
        //   // exclude: [path.resolve("src")],
        // },
      ],
    },
  });
};
