import { Heading } from "@/components";
import Image from "next/image";
import { getExhibitors } from "@/services";
import HeartIcon from "@/icons/heart.svg";
import HeartButton from "@/components/HeartButton/HeartButton";
import SearchBar from "@/components/SearchBar";
import logo from "@/images/logo.png";

const Exhibitors = async () => {
  let exhibitors = await getExhibitors();
  exhibitors = exhibitors.sort((a, b) => {
    return a.attributes.name.localeCompare(b.attributes.name);
  });

  return (
    <>
      <Heading>Exhibitors</Heading>
      <SearchBar />
      <div className=" flex flex-row justify-center text-center">
        <p className="m-2">show only my favourites</p>
        <HeartButton className="m-2" />
      </div>
      <pre className=" min-w-min">
        {exhibitors.map((exhibitor) => {
          return (
            <div key={exhibitor.id} className="flex flex-row">
              <div className=" m-2 min-w-[80px]">
                <Image
                  src={
                    exhibitor.attributes?.logo?.data?.attributes?.url
                      ? process.env.STRAPI_ENDPOINT_URL +
                        exhibitor.attributes.logo.data.attributes.url
                      : logo
                  }
                  alt="img"
                  className=" h-20 w-20 rounded-xl border-2 border-black object-cover"
                  width={80}
                  height={80}
                />
              </div>
              <div className=" m-2 flex-1">
                <div className="flex flex-row justify-between">
                  <a
                    className=" underline"
                    href={exhibitor.attributes?.exhibitor_url}
                  >
                    {exhibitor.attributes.name}
                  </a>
                  <HeartButton className="m-2" />
                </div>
                {exhibitor.attributes?.industry_type && (
                  <p>#{exhibitor.attributes.industry_type}</p>
                )}
                {exhibitor.attributes?.location && (
                  <p className=" mr-2 inline-flex">
                    location: {exhibitor.attributes.location}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </pre>
    </>
  );
};

export default Exhibitors;
