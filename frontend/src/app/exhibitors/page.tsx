import { ExhibitorsList } from "@/components/Exhibitors";
import { Heading } from "@/components/Heading";
import { ExhibitorsService } from "@/services";

const ExhibitorsPage = async () => {
  const exhibitors = await ExhibitorsService();

  return (
    <>
      <Heading>Exhibitors</Heading>

      <ExhibitorsList data={exhibitors} />
    </>
  );
};

export default ExhibitorsPage;
