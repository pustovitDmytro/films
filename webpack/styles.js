// /**
//  * Created by pusti on 29.07.2017.
//  */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = function(paths,isDebug) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [{
                            loader: 'css-loader',
                            options: {
                                sourceMap: isDebug,
                                modules: true,
                                localIdentName: isDebug ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
                                minimize: !isDebug,
                                discardComments: { removeAll: true },
                            }},'sass-loader'],
                    }),
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isDebug,
                                modules: true,
                                localIdentName: isDebug ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
                                minimize: !isDebug,
                                discardComments: { removeAll: true },
                            }
                            }
                            ]
                    }),
                },
            ],
        },
        plugins: [
            new ExtractTextPlugin('./styles.css'),
        ],
    };
};
// module.exports = function(paths,isDebug) {
//     return {
//         module: {
//             // Make missing exports an error instead of warning
//             strictExportPresence: true,
//             rules: [
//                 {
//                     test: /\.(css)$/,
//                     rules: [
//                         {
//                             issuer: { not: [/\.(css)$/] },
//                             use: 'isomorphic-style-loader',
//                         },
//
//                         // Process external/third-party styles
//                         {
//                             exclude: paths.source,
//                             loader: 'css-loader',
//                             options: {
//                                 sourceMap: isDebug,
//                                 minimize: !isDebug,
//                                 discardComments: { removeAll: true },
//                             },
//                         },
//
//                         // Process internal/project styles (from src folder)
//                         {
//                             include: paths.source,
//                             loader: 'css-loader',
//                             options: {
//                                 // CSS Loader https://github.com/webpack/css-loader
//                                 importLoaders: 1,
//                                 sourceMap: isDebug,
//                                 // CSS Modules https://github.com/css-modules/css-modules
//                                 modules: true,
//                                 localIdentName: isDebug
//                                     ? '[name]-[local]-[hash:base64:5]'
//                                     : '[hash:base64:5]',
//                                 // CSS Nano http://cssnano.co/options/
//                                 minimize: !isDebug,
//                                 discardComments: { removeAll: true },
//                             },
//                         },
//
//                         // Apply PostCSS plugins including autoprefixer
//                         {
//                             loader: 'postcss-loader',
//                             options: {
//                                 config: {
//                                     path: './webpack/postcss.config.js',
//                                 },
//                             },
//                         },
//                         // Compile Sass to CSS
//                         // https://github.com/webpack-contrib/sass-loader
//                         // Install dependencies before uncommenting: yarn add --dev sass-loader node-sass
//                         {
//                             test: /\.scss$/,
//                             use: [{
//                                 loader: "style-loader" // creates style nodes from JS strings
//                             }, {
//                                 loader: "css-loader",
//                                 options: {
//                                     // CSS Loader https://github.com/webpack/css-loader
//                                     importLoaders: 1,
//                                     sourceMap: isDebug,
//                                     // CSS Modules https://github.com/css-modules/css-modules
//                                     modules: true,
//                                     localIdentName: isDebug
//                                         ? '[name]-[local]-[hash:base64:5]'
//                                         : '[hash:base64:5]',
//                                     // CSS Nano http://cssnano.co/options/
//                                     minimize: !isDebug,
//                                     discardComments: { removeAll: true },
//                                 },
//                             }, {
//                                 loader: "sass-loader" // compiles Sass to CSS
//                             }]
//                         },
//                     ],
//                 },
//             ],
//         },
//     };
// }