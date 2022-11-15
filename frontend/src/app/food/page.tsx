import { Heading } from "@/components";

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
            <div key={foodItem.id} className=" flex flex-row m">
              <div className=" m-2">
                <img className=" object-cover h-20 w-20 rounded-xl border-2 border-black" src={foodItem.attributes?.image_url ? foodItem.attributes.image_url : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="} alt="img" />
              </div>
              <div className=" m-2">
                <a className=" underline" href={foodItem.attributes?.restaurantUrl}>{foodItem.attributes.name}</a>
                {foodItem.attributes.location && <p>location: {foodItem.attributes.location}</p>}
              </div>
              
              
            </div>
          );
        })}
      </pre>
    </>
  );
};

export default Food;
