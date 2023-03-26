import createClient from "@sanity/client";
import { config } from "./config";

if (!config.projectId) {
  throw Error("The Project ID is not set. Check your environment variables.");
}

export const client = createClient(config);

export const getClient = () => client;
export default client;
