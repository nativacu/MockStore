const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "remoteapp1": "https://stately-moonbeam-b1b702.netlify.app/remoteEntry.js",
    "remoteapp2": "https://capable-puffpuff-7fd394.netlify.app/remoteEntry.js",
    // "remoteapp1": "http:localhost:4202/remoteEntry.js",
    // "remoteapp2": "http:localhost:4203/remoteEntry.js",
    // "remoteapp3": "http:localhost:4204/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
