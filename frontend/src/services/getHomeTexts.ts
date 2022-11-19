import { client } from "@/support/client";

export async function getHomeTexts() {
  return client.get("/api/home-texts?populate=*").then((response) => {
    return response.data.data.length > 0 ? response.data.data : null;
  });
}
