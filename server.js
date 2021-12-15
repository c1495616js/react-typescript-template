/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const express = require('express');
const expressStaticGzip = require('express-static-gzip');

const app = express();

/** middleware */
app.use(
  expressStaticGzip(path.join(__dirname, 'build'), {
    enableBrotli: true, // only if you have brotli files too
  })
);

app.use(express.static(path.join(__dirname, 'build')));
app.set('port', process.env.PORT || 8080);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const server = app.listen(app.get('port'), () => {
  console.log('listening on port ', server.address().port);
});
