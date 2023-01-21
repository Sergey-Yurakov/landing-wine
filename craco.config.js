const path = require('path');

const resolvePath = p => path.resolve(__dirname, p);

module.exports = {
    webpack: {
        alias: {
            '@components': resolvePath('./src/components'),
            '@hooks': resolvePath('./src/hooks'),
            '@images': resolvePath('./src/images'),
            '@pages': resolvePath('./src/pages'),
            '@router': resolvePath('./src/router'),
            '@scss': resolvePath('./src/scss'),
        },
    },
};
