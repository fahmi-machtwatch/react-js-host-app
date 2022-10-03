const deps = require("./package.json").dependencies;

module.exports = {
  name: "app1",
  remotes: {
    accountPlatform: `accountPlatform@https://next-js-remote-app.vercel.app`,
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
