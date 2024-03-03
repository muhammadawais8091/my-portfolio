// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "bbxw7nja",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
};

const client = createClient(config);

export default client;