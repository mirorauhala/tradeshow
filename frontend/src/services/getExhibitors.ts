import { client } from "@/support/client";

export async function getExhibitors() {
  return client
    .get("/api/exhibitors?populate=*")
    .then((response) => response.data.data);
}
