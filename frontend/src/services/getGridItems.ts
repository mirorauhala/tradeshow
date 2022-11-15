import { client } from "@/support/client";

export async function getGridItems() {
  return client.get("/api/grids?populate=*").then((response) => response.data);
}
