module.exports = {
    context: ".",
    entry: "./app",
    resolveLoader: {
        modulesDirectories: [
            "/usr/lib/node_modules",
        ],
    },
    module: {
      loaders: [
         {
           test: /\.js$/,
           exclude: /(node_modules|bower_components)/,
           loader: 'babel-loader',
           query: {
             //optional: ['runtime'],
             stage: 0
           }
         },
      ]
    },
    output: {
        filename: "bundle.js"
    }
}
