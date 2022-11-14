import { client } from "@/support/client";


export interface FAQInterface {
    id?: number;
    attributes: { question: string, answer: string }
}

export async function FAQ() {
  return  client.get("/api/faqs?populate=*").then((response) => response.data);
}