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
                        <li>
                            <div key={item.id} className='flex justify-start'>
                                <p className="text-lg font-bold">{item.startTime}</p>
                                <p className="text-lg ml-6">{item.name}</p>
                            </div>
                        </li>
                    ))}
            </Grid>
        </div>
    );
};

export default Program;