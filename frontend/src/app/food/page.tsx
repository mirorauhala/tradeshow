import { Heading } from "@/components";
import Image from "next/image";
import logo from "@/images/logo.png";

const baseUrl = "http://localhost:1337";
const auth = `Bearer ${process.env.STRAPI_API_KEY}`;

const Food = async () => {
  const food = await (
    await fetch(`${baseUrl}/api/foods?populate=*`, {
      headers: {
        Authorization: auth,
      },
    })
  ).json();

  return (
    <>
      <Heading>Food</Heading>
      <pre>
        {food.data.map((foodItem) => {
          return (
            <div className=" bg-gray-200 rounded-xl p-2 m-2" >
              <div key={foodItem.id} className=" m flex flex-row">
                <div className=" m-2 min-w-[80px]">
                  <Image
                    src={
                      foodItem.attributes?.restaurant_image?.data?.attributes
                        ?.url
                        ? process.env.STRAPI_ENDPOINT_URL +
                          foodItem.attributes.restaurant_image.data.attributes
                            .url
                        : logo
                    }
                    alt="img"
                    className=" h-20 w-20 rounded-xl border-2 border-black object-cover"
                    width={80}
                    height={80}
                  />
                </div>
                <div className=" m-2">
                  <a
                    className=" underline"
                    href={foodItem.attributes?.restaurantUrl}
                    target="_blank"
                  >
                    {foodItem.attributes.name}
                  </a>
                  {foodItem.attributes.location && (
                    <p>location: {foodItem.attributes.location}</p>
                  )}
                </div>
              </div>
              <div className=" mb-2 ml-2 mr-2">
                {foodItem.attributes.description && (
                  <p>{foodItem.attributes.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </pre>
    </>
  );
};

export default Food;
