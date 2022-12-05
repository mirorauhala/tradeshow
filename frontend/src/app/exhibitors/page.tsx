import { Heading } from "@/components";
import ExhPage from "@/components/Exhibitors/ExhPage";
import { getExhibitors } from "@/services";

const Exhibitors = async () => {
  const exhibitors = await getExhibitors();
  exhibitors.sort((a, b) => {
    return a.attributes.name.localeCompare(b.attributes.name);
  });

  return (
    <>
      <Heading>Exhibitors</Heading>
      <ExhPage exhibitors={exhibitors} />
    </>
  );
};

export default Exhibitors;
