import { define } from 'amdine';
import { discoveryAndInit } from 'amdine-loader';

define(['server'], async function (server) {
  await server.start();
});

discoveryAndInit();
