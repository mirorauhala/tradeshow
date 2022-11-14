import { Heading } from "@/components/Heading";
import Image from "next/image";

const baseUrl = "http://localhost:1337";
const auth = `Bearer ${process.env.STRAPI_API_KEY}`;

const Exhibitors = async () => {
  const exhibitors = await (
    await fetch(`${baseUrl}/api/exhibitors?populate=*`, {
      headers: {
        Authorization: auth,
      },
    })
  ).json();

  return (
    <>
      <Heading>Exhibitors</Heading>
      <pre>
        {exhibitors.data.map((exhibitor) => {
          return (
            <div key={exhibitor.id}>
              <p>{exhibitor.attributes.name}</p>
              <img src={exhibitor.attributes.image_url} alt="img" />
              <p>{exhibitor.attributes.location}</p>
            </div>
          );
        })}
      </pre>
    </>
  );
};

export default Exhibitors;
