import { Heading } from "@/components/Heading";

const Exhibitors = async () => {
  const exhibitors = await (
    await fetch("http://localhost:1337/api/exhibitors", {
      headers: {
        Authorization: "Bearer " + process.env.STRAPI_API_KEY,
      },
    })
  ).json();

  return (
    <>
      <Heading>Exhibitors</Heading>
      <pre>{JSON.stringify(exhibitors, null, 2)}</pre>
    </>
  );
};

export default Exhibitors;
