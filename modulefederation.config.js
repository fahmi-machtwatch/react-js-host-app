const deps = require("./package.json").dependencies;

module.exports = {
  name: "host-app",
  remotes: {
    pageWithDialog: `accountPlatform@https://next-js-remote-app-git-v100-fahmi-machtwatch.vercel.app/api/remote-entry`,
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
