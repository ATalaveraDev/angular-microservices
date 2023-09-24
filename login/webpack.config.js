const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "login"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "login",
      library: { type: "var", name: "login" },
      filename: "remoteEntry.js",
      exposes: {
        './mainModule': './src/app/modules/main/bootstrap.ts',
      },
      shared: {
        "@angular/core": { requiredVersion: "12.0.3" },
        "@angular/common": { requiredVersion: "12.0.3" },
        "@angular/router": { requiredVersion: "12.0.3" },
        "rxjs": {}
      }
    })
  ],
};
