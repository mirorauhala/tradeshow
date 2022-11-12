import { client } from "@/support/client";

export async function GridItems() {
  return client.get("/api/grids?populate=*").then((response) => response.data);
}
