import { define } from 'amdine';
import { Server } from '@hapi/hapi';

define('routes/index', ['server'], function (server) {
  server.route({
    method: 'GET',
    path: '/',
    handler(request, h) {
      return 'Index route!';
    },
  });
});
