"use client";

import { type FAQInterface } from "@/services";
import React from "react";
import { AccordionArrow } from "./AccordionArrow";
import { TextSorting } from "./TextSorting";

export const FaqAccordion = ({ attributes }: FAQInterface) => {
  const { question, answer } = attributes;
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button
        className="accordion-button webkit-link relative inline-flex w-full items-center justify-between rounded-xl bg-gray-200 py-2 px-3 text-left text-lg text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="mr-5">{question}</p>
        <span className={`rotate-${isOpen ? "180" : "0"}`}>
          <AccordionArrow />{" "}
        </span>
      </button>
      {isOpen && (
        <div className="pl-5">
          <div className="-mb-0.5 pl-3">
            <TextSorting />
          </div>
          <div className="accordion-body w-full rounded-xl bg-gray-200 py-2 px-3">
            <p className="font-open text-gray-500">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};
