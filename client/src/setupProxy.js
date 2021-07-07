const {createProxyMiddleware} = require('http-proxy-middleware');
// const config = require('./config.json');
module.exports = function (app) {

    app.use(
        '/chat',
        createProxyMiddleware({
            // target: config.server+':5000',
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );
};
