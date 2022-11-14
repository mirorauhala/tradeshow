import { Grid, GridItem, GridIcon } from "@/components/Grid";
import { Heading } from "@/components";
import { GridItems, HomeText } from "@/services";

const Home = async () => {
  const [homeText, gridItems] = await Promise.all([HomeText(), GridItems()]);


  return (
    <div>
      <Heading>{homeText}</Heading>

      <main>
        <Grid>
          {gridItems.data.length > 0 &&
            gridItems.data.map((item) => (
              <GridItem key={item.id} href={item.attributes.link}>
                {item.attributes.icon && (
                  <GridIcon icon={item.attributes.icon} />
                )}
                {item.attributes.name}
              </GridItem>
            ))}
        </Grid>
      </main>
    </div>
  );
};

export default Home;
