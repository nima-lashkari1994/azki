const path = require('path');
module.exports = {
    webpack: {
        alias: {
            '@common': path.resolve(__dirname, 'src/features/_common'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@assets': path.resolve(__dirname, 'src/assets'),
        },
    },
};