import { Grid, GridItem, GridIcon } from "@/components/Grid";
import { Heading } from "@/components";
import { getGridItems, getHomeTexts } from "@/services";

const Home = async () => {
  const [homeTexts, gridItems] = await Promise.all([
    getHomeTexts(),
    getGridItems(),
  ]);
  // voi kokeilla 'en' tai 'de'
  const lang = "en";

  return (
    <div>
      <Heading>
        {homeTexts ? (
          <p className="text-2xl">
            {
              homeTexts.filter(
                (hometext) => hometext.attributes.language === lang
              )[0].attributes.top_text
            }
          </p>
        ) : (
          ""
        )}
      </Heading>

      <main>
        <Grid>
          {gridItems.data.length > 0 &&
            gridItems.data.map((item) => (
              <GridItem key={item.id} href={item.attributes.link}>
                <div className="flex justify-around">
                  <div className="flex-shrink">
                    {item.attributes.icon && (
                      <GridIcon icon={item.attributes.icon} />
                    )}
                  </div>
                  <div className="my-auto flex-auto">
                    {item.attributes.name}
                  </div>
                </div>
              </GridItem>
            ))}
        </Grid>
      </main>
    </div>
  );
};

export default Home;
