const deps = require("./package.json").dependencies;

module.exports = {
  name: "app1",
  remotes: {
    accountPlatform: `accountPlatform@${process.env.REACT_APP_ACCOUNT_PLATFORM_URL}`,
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
