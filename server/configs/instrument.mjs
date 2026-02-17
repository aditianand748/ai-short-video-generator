import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://0ff856d82a6c47fc0b7fd3a424eea67c@o4510900003930112.ingest.us.sentry.io/4510900014350336",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});
