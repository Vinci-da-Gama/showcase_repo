import ExtractTextPlugin  from 'extract-text-webpack-plugin';

const sassLane = `${ast}/style`;

exports.setupSCSS = function(sassPath) {
    return {
        module: {
            rules: [
                {   test: /\.s?css$/,
                    use: ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true,
                                    includePaths: [`${sassLane}`]
                                }
                            }
                        ]
                    })
                }
            ]
        }
    };
};
