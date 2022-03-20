import { define } from 'amdine';
import { Server } from '@hapi/hapi';

define('server', function () {
  return Server({
    port: 3000,
    host: 'localhost',
  });
});
