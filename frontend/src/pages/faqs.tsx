import { Heading } from "@/components";
import { FaqAccordion } from "@/components/FaqAccordion/FaqAccordion";
import { Grid } from "@/components/Grid";
import Layout from "@/components/Layout";
import { getFaqs, type FAQInterface } from "@/services";
import Head from "next/head";

type FaqsProps = {
  faqs: any;
};

export async function getServerSideProps() {
  const faqs = await getFaqs();

  return {
    props: {
      faqs,
    } as FaqsProps,
  };
}

const FAQs = ({ faqs }: FaqsProps) => {
  return (
    <Layout>
      <div>
        <Head>
          <title>FAQ</title>
        </Head>
        <Heading>FAQs</Heading>
        <Grid>
          {faqs.data.length > 0 &&
            faqs.data.map((item: FAQInterface) => (
              <div key={item.id}>
                <FaqAccordion attributes={item.attributes} />
              </div>
            ))}
        </Grid>
      </div>
    </Layout>
  );
};

export default FAQs;
