import { Heading } from "@/components";
import { FaqAccordion } from "@/components/FaqAccordion/FaqAccordion";
import { Grid } from "@/components/Grid";
import { getFaqs, type FAQInterface } from "@/services";

const FAQs = async () => {
  const faqs = await getFaqs();

  return (
    <div>
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
  );
};

export default FAQs;
