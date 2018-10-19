const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const getIndex = (request, response, page) => {
  const newPage = (page.indexOf('html') > -1) ? fs.readFileSync(`${__dirname}/../client${page}`) : index;
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(newPage);
  response.end();
};

module.exports.getIndex = getIndex;
