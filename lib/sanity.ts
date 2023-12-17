import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "9acyr12z",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
