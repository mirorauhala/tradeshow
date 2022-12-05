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
            startTime: program.attributes.start_time.substring(0, program.attributes.start_time.indexOf(':', program.attributes.start_time.indexOf(':') + 1)) + `${program.attributes.end_time ? ' - ' + program.attributes.end_time.substring(0, program.attributes.end_time.indexOf(':', program.attributes.end_time.indexOf(':') + 1)) : ''}`,
        }})
        .sort((a: ProgramInterface, b: ProgramInterface) => a.startTime.localeCompare(b.startTime));

}
