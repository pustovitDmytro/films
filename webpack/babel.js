/**
 * Created by pusti on 30.07.2017.
 */
module.exports = function(path,isDebug) {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.source,
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: isDebug,
                        babelrc: false,
                        presets: [
                            [
                                'env',
                                {
                                    targets: {
                                        uglify: true,
                                    },
                                    modules: false,
                                    useBuiltIns: false,
                                    debug: false,
                                },
                            ],
                            'stage-2',
                            'react',
                            ...(isDebug ? [] : ['react-optimize']),
                        ],
                        plugins: [
                            ...(isDebug ? ['transform-react-jsx-source'] : []),
                            ...(isDebug ? ['transform-react-jsx-self'] : []),
                        ],
                    },
                }
            ]
        },
    };
};