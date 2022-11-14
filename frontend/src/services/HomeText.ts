import { client } from "@/support/client";

export async function HomeText() {
  return client
    .get("/api/home")
    .then((response) => response.data.data.attributes.top_text);
}
