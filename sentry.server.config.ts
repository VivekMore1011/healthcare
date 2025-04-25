// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://0f5b150c37348b58861e4b8a9778f8c3@o4509203674365952.ingest.us.sentry.io/4509203678560256",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
