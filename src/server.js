const http = require('http');
const url = require('url');
// const fs = require('fs');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  const reqUrl = url.parse(request.url).pathname;
  const isMedia = (reqUrl.indexOf('mp4') > -1) || (reqUrl.indexOf('mp3') > -1);

  switch (isMedia) {
    case false:
      htmlHandler.getIndex(request, response, reqUrl);
      break;
    case true:
      mediaHandler.getParty(request, response, reqUrl);
      break;
    default:
      htmlHandler.getIndex(request, response, reqUrl);
      break;
  }
};

http.createServer(onRequest).listen(port);

// console.log(`Listening on 127.0.0.1: ${port}`);
