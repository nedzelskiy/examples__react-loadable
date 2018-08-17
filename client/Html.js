'use strict';
import React from 'react';

export default class Html extends React.PureComponent {
  render () {
    return (
      <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Example react lazy-loading</title>
      </head>
      <body>
        <div id="mount">{this.props.children}</div>
        <script type="text/javascript" src="/build/client-bundle.js"></script>
      </body>
      </html>
    );
  }
}
