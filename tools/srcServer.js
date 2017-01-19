import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import proxy from 'express-http-proxy';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);
const apiUri = process.env.API_URI || '/api';
const apiUrl = process.env.API_URL || 'http://localhost:8080';
const timeout = process.env.TIMEOUT || 10000;

const isMultipartRequest = function (req) {
  let contentTypeHeader = req.headers['content-type'];
  return contentTypeHeader && contentTypeHeader.indexOf('multipart') > -1;
};

const asBase64 = function (value) {
  return Buffer.from(value).toString('base64');
};

const proxyMiddleware = function(settings) {
  process.stdout.write(`forwarded: ${settings.url}\n`);

  return function (req, res, next) {
    let reqAsBuffer = false;
    let reqBodyEncoding = true;
    if (isMultipartRequest(req)) {
      reqAsBuffer = true;
      reqBodyEncoding = null;
    }
    if (!settings.authenticate || !req.isAuthenticated()) {
      return proxy(settings.url, {
        reqAsBuffer,
        reqBodyEncoding,
        timeout: timeout,
        limit: '10mb',
        decorateRequest: function (proxyReq, originalReq) {
          process.stdout.write(`forwarded: ${originalReq.url}\n`);
          if (settings.authenticate) {
            const user = originalReq.user;
            if (!proxyReq.headers)
              proxyReq.headers = {};
            proxyReq.headers['X-Authorization'] = 'Basic ' + asBase64(`${user.username}:${user.password}`);
          }
          return proxyReq;
        }
      })(req, res, next);
    } else {
      return res.status(204).end();
    }
  };
};



app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(apiUri, proxyMiddleware({ url: apiUrl, authenticate: false }));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
