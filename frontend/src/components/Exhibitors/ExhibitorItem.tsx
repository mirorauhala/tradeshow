"use client";
import Image from "next/image";

type ExhibitorItemProps = {
  data: any;
};

export function ExhibitorItem({ data }: ExhibitorItemProps) {
  return (
    <li className="flex gap-2 rounded-lg bg-white p-2">
      {data.attributes.logo_url && (
        <div className="flex aspect-square items-center justify-center">
          <Image
            src={
              "http://localhost:1337" +
              data.attributes.logo_url.data.attributes.url
            }
            alt=""
            height={80}
            width={80}
          />
        </div>
      )}

      <div>
        <h1 className="text-xl">{data.attributes.name}</h1>
        <p>{data.attributes.location}</p>
      </div>
    </li>
  );
}
