const deps = require("./package.json").dependencies;

module.exports = {
  name: "host-app",
  remotes: {
    pageWithDialog: `accountPlatform@https://next-js-remote-app-git-v110-fahmi-machtwatch.vercel.app/api/remote-entry`,
    accounts: `accounts@https://next-js-remote-app-git-v120-fahmi-machtwatch.vercel.app/api/remote-entry`,
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
