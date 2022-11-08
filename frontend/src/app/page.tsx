import { Grid, GridItem } from "@/components/Grid";
import { Heading } from "@/components/Heading";

const Home = () => {
  return (
    <div>
      <Heading>Home</Heading>

      <main>
        <Grid>
          <GridItem href={"/"} color="red">
            Arriving to the venue
          </GridItem>
          <GridItem href={"/"} color="green">
            Catering & food
          </GridItem>
          <GridItem href={"/"} color="yellow">
            Arriving to the venue
          </GridItem>
          <GridItem href={"/"} color="blue">
            Catering & food
          </GridItem>
        </Grid>
      </main>
    </div>
  );
};

export default Home;
