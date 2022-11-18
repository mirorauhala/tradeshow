import { Heading, MapItem } from "@/components";
import { getMaps } from "@/services";
import Image from "next/image";
import { DownloadIcon } from "@/components/Map";

const Map = async () => {
  const maps = await getMaps();

  return (
    <>
      <Heading>Map</Heading>

      {maps.length > 0 &&
        maps.map((mapitem) => (
          <MapItem key={mapitem.id}>
            <div className="flex flex-row justify-between">
              <p className="text-2xl">{mapitem.attributes.name}</p>
              {/* Surround with download link */}
              <DownloadIcon />
            </div>
            {mapitem.attributes.image_url.data !== null && (
              <div className="mt-4">
                <Image
                  src={
                    process.env.STRAPI_ENDPOINT_URL +
                    mapitem.attributes.image_url.data.attributes.url
                  }
                  alt={mapitem.attributes.image_url.data.attributes.name}
                  width={800}
                  height={380}
                />
              </div>
            )}
            {mapitem.attributes.map_links.data.length > 0 && (
              <div className="mt-8 flex w-full flex-col justify-start px-2 text-lg">
                {mapitem.attributes.map_links.data.map((maplink) => (
                  <div key={maplink.id}>
                    {maplink.attributes.location}{" "}
                    <a
                      href={maplink.attributes.name_url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-1"
                    >
                      {maplink.attributes.name}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </MapItem>
        ))}
    </>
  );
};

export default Map;
