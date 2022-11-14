'use client'

import { FAQInterface } from "@/services";
import React from "react";
import { AccordionArrow } from "./AccordionArrow";
import { TextSorting } from "./TextSorting";



export const FaqAccordion = ({ attributes }: FAQInterface) => {
    const { question, answer } = attributes;
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <button className='accordion-button relative items-center justify-between inline-flex w-full py-2 px-3 text-lg text-black text-left rounded-xl bg-gray-200 webkit-link'
            onClick={() => setIsOpen(!isOpen)}>
                <p className="mr-5">{question}</p>
                <span className={`rotate-${isOpen ? '180' : '0'}`}><AccordionArrow/> </span>
                </button>
            {isOpen && (
                <div className="pl-5">
                    <div className='pl-3 -mb-0.5'>
                        <TextSorting />
                    </div>
                    <div className='accordion-body py-2 px-3 bg-gray-200 w-full rounded-xl'>
                        <p className="font-open text-gray-500">{answer}</p>
                    </div>
            </div>
            )}
        </div>
    )
}