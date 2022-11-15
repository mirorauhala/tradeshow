import { Heading } from "@/components";
import { FaqAccordion } from "@/components/FaqAccordion/FaqAccordion";
import { Grid } from "@/components/Grid";
import { getFaqs, FAQInterface } from "@/services";

const FAQs = async () => {
  const faqs = await getFaqs();

  return (
    <div>
      <Heading>
        <p className="text-4xl">FAQs</p>
      </Heading>
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
