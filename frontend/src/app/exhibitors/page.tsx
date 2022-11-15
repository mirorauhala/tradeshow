import { Heading } from "@/components";
import Image from "next/image";
import { getExhibitors } from "@/services";

const Exhibitors = async () => {
  const exhibitors = await getExhibitors();

  return (
    <>
      <Heading>Exhibitors</Heading>
      <pre>
        {exhibitors.map((exhibitor) => {
          return (
            <div key={exhibitor.id}>
              <p>{exhibitor.attributes.name}</p>
              <Image
                src={
                  process.env.STRAPI_ENDPOINT_URL +
                  exhibitor.attributes.logo.data.attributes.url
                }
                alt="img"
                width={100}
                height={100}
              />
              <p>{exhibitor.attributes.location}</p>
            </div>
          );
        })}
      </pre>
    </>
  );
};

export default Exhibitors;
