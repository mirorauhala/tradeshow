import { client } from "@/support/client";

export async function ExhibitorsService() {
  return client
    .get("/api/exhibitors?populate=*")
    .then((response) => response.data);
}
