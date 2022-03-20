import { define } from 'amdine';
import { Server } from '@hapi/hapi';

define('routes/hello', ['server'], function (server) {
  server.route({
    method: 'GET',
    path: '/hello',
    handler(request, h) {
      return 'Hello World!';
    },
  });
});
