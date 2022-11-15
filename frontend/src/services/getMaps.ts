import { client } from "@/support/client";

export async function getMaps() {
  return client
    .get("/api/maps?populate=*")
    .then((response) => response.data.data);
}
