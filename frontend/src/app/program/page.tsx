import { Heading } from "@/components";
import { Grid } from "@/components/Grid";
import { getProgram, ProgramInterface } from "@/services";

const Program = async () => {
  const program = await getProgram();

  return (
    <div>
      <Heading>Program</Heading>
      <Grid>
        {program.length > 0 &&
          program.map((item: ProgramInterface) => (
            <li key={item.id}>
              <div className="flex justify-start">
                <p className="text-lg font-bold">{item.startTime}</p>
                <p className="ml-6 text-lg">{item.name}</p>
              </div>
            </li>
          ))}
      </Grid>
    </div>
  );
};

export default Program;
