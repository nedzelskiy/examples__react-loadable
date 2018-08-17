import fs from 'fs';
import { createServer } from 'http';
import ReactDOM from 'react-dom/server';
import React from "react";
import Html from '../client/Html';
import { StaticRouter } from 'react-router-dom';

const server = createServer();
const SERVER_PORT = 7777;

server.on('request', (req, res) => {
  res.statusCode = 200;
  if (req.url === '/' || req.url === '/other') {

    const context = {};

    const html = ReactDOM.renderToStaticMarkup(
      <Html>
      <StaticRouter location={req.url} context={context}>
        <div className="mount">
          <App />
        </div>
      </StaticRouter>
      </Html>,
    );

    // return res.end(fs.readFileSync('./index.html'), 'utf-8');
    if (!context.url) {
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
    } else {
      res.writeHead(302, {
        'Location': context.url
      });
      res.end();
    }
  }
  try {
    return res.end(fs.readFileSync(`.${req.url}`, 'utf-8'));
  } catch (err) {
    return res.end('err');
  }

}).listen(SERVER_PORT, () => {
  console.log(`Server is running on ${ SERVER_PORT } ${new Date()}`);
});