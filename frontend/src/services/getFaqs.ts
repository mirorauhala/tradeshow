import { client } from "@/support/client";

export interface FAQInterface {
  id?: number;
  attributes: { question: string; answer: string };
}

export async function getFaqs() {
  return client.get("/api/faqs?populate=*").then((response) => response.data);
}
