"use client";
import { ExhibitorItem } from "./ExhibitorItem";

type ExhibitorsListProps = { data: any };

export function ExhibitorsList({ data }: ExhibitorsListProps) {
  return (
    <div>
      <form className="mb-4 flex gap-2">
        <input
          type="text"
          className="w-full rounded-lg border border-slate-200 py-2 px-3 placeholder:text-slate-400 focus:outline-blue-500 focus:placeholder:text-slate-500"
          placeholder="Search"
        />
        <button>Filter</button>
      </form>

      <ul>
        {data.data.map((exhibitor: any) => (
          <ExhibitorItem key={exhibitor.id} data={exhibitor} />
        ))}
      </ul>
    </div>
  );
}
