"use client";

import { Heading } from "@/components";
import Image from "next/image";
import HeartButton from "@/components/HeartButton/HeartButton";
import SearchBar from "@/components/SearchBar";
import SortBar from "@/components/SortBar";
import logo from "@/images/logo.png";
import { useEffect, useState } from "react";

interface ExhibitorsProps {
  exhibitors: any[];
}

const ExhPage = (props: ExhibitorsProps) => {
  const { exhibitors } = props;

  const [exhibitorsList, setExhibitorsList] = useState(exhibitors);

  const sortByAlphabet = () => {
    console.log("sort by alphabet");
    const sortedArray = exhibitorsList.sort((a, b) => {
      if (a.attributes.name < b.attributes.name) {
        return -1;
      }
      if (a.attributes.name > b.attributes.name) {
        return 1;
      }

      return 0;
    });
    console.log(sortedArray);
    let sortedArray2 = [...sortedArray];
    setExhibitorsList(sortedArray2);
  };

  const sortByIndustry = () => {
    console.log("sort by industry");
    const sortedArray = exhibitorsList.sort((a, b) => {
      if (a.attributes.industry_type < b.attributes.industry_type) {
        return -1;
      }
      if (a.attributes.industry_type > b.attributes.industry_type) {
        return 1;
      }

      return 0;
    });
    console.log(sortedArray);
    let sortedArray2 = [...sortedArray];
    setExhibitorsList(sortedArray2);
  };

  useEffect(() => {
    exhibitorsList.forEach((exhibitor) => {
      exhibitor.liked = JSON.parse(
        localStorage.getItem(exhibitor.attributes.name)
      );
    });
  }, [exhibitorsList]);

  const handleLiked = (exhibitor: any, state: boolean) => {
    console.log("liked", exhibitor);
    let tempExhibitor = exhibitor;
    tempExhibitor.liked = state;
    let tempExhibitorsList = exhibitorsList;
    console.log("marko", tempExhibitor.liked);
    if (!tempExhibitor.liked) {
      tempExhibitor = { ...tempExhibitor, liked: true };
      localStorage.setItem(
        exhibitor.attributes.name,
        JSON.stringify(tempExhibitor.liked)
      );
    } else {
      tempExhibitor = { ...tempExhibitor, liked: false };
      console.log("else", tempExhibitor.liked);
      localStorage.setItem(
        exhibitor.attributes.name,
        JSON.stringify(tempExhibitor.liked)
      );
    }
    const index = tempExhibitorsList.findIndex(
      (exh) => exh.id === tempExhibitor.id
    );
    tempExhibitorsList[index] = tempExhibitor;
    setExhibitorsList(tempExhibitorsList);
    console.log("asdas", tempExhibitor);
  };

  const showFavourites = (state) => {
    console.log("show favourites");
    let sortedArray = [...exhibitorsList];
    if (state) {
      sortedArray = exhibitorsList.filter((exh) => exh.liked);
    } else {
      sortedArray = exhibitors;
    }
    const sortedArray2 = [...sortedArray];
    setExhibitorsList(sortedArray2);
  };

  return (
    <>
      <div className=" flex w-auto flex-row justify-between">
        <div className=" w-1/2">
          <SearchBar
            defaultList={exhibitors}
            setFilteredArray={setExhibitorsList}
          />
        </div>
        <div className=" w-1/2">
          <SortBar
            defaultList={exhibitors}
            setFilteredArray={setExhibitorsList}
            sortByAlphabet={sortByAlphabet}
            sortByIndustry={sortByIndustry}
          />
        </div>
      </div>
      <div className=" flex flex-row justify-center text-center">
        <p className="m-2">show only my favourites</p>
        <HeartButton showFavourites={showFavourites} className="m-2" />
      </div>
      <pre className=" min-w-min">
        {exhibitorsList.map((exhibitor) => {
          return (
            <div key={exhibitor.id} className="flex flex-row">
              <div className=" m-2 min-w-[80px]">
                <Image
                  src={
                    exhibitor.attributes?.logo?.data?.attributes?.url
                      ? process.env.NEXT_PUBLIC_STRAPI_ENDPOINT_URL +
                        exhibitor.attributes.logo.data.attributes.url
                      : logo
                  }
                  alt="img"
                  className=" h-20 w-20 rounded-xl border-2 border-black object-cover"
                  width={80}
                  height={80}
                />
              </div>
              <div className=" m-2 flex-1">
                <div className="flex flex-row justify-between">
                  <a
                    className=" underline"
                    href={exhibitor.attributes?.exhibitor_url}
                    target="_blank"
                  >
                    {exhibitor.attributes.name}
                  </a>
                  <HeartButton
                    className="m-2"
                    onClick={handleLiked}
                    exhibitor={exhibitor}
                  />
                </div>
                {exhibitor.attributes?.industry_type && (
                  <p>#{exhibitor.attributes.industry_type}</p>
                )}
                {exhibitor.attributes?.location && (
                  <p className=" mr-2 inline-flex">
                    location: {exhibitor.attributes.location}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </pre>
    </>
  );
};
export default ExhPage;
