
const morgan = require('morgan');

const requestLogger = morgan((tokens, req, res) => {
  return [
    `[${new Date().toISOString()}]`,
    tokens.method(req, res),
    tokens.url(req, res),
    tokens['remote-addr'](req, res),
    `status: ${tokens.status(req, res)}`,
    `response time: ${tokens['response-time'](req, res)} ms`
  ].join(' ');
});

module.exports = requestLogger;