import { client } from "@/support/client";


interface ProgramResponse{
    id?: number;
    attributes: { start_time: string; end_time: string; name: string; };
}
export interface ProgramInterface {
    id?: number;
    startTime: string;
    name: string;
}


export async function getProgram() {
    const program = await client.get("/api/programs?populate=*").then((response) => response.data);
    return program.data.map((program: ProgramResponse) => {
        return {
            id: program.id,
            name: program.attributes.name,
            startTime: stripTime(program.attributes.start_time) + `${program.attributes.end_time ? ' - ' + stripTime(program.attributes.end_time) : ''}`,
        }})
        .sort((a: ProgramInterface, b: ProgramInterface) => a.startTime.localeCompare(b.startTime));

}


const stripTime = (time: string) => time.substring(0, time.indexOf(':', time.indexOf(':') + 1));
