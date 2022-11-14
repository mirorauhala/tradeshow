import { Map, Food, Exhibitors, Faq } from "@/components/Grid/icons";
import { createElement } from "react";

const icons = {
  MAP: Map,
  FOOD: Food,
  EXHIBITORS: Exhibitors,
  FAQ: Faq,
};

type GridIconProps = {
  icon: keyof typeof icons;
};

export const GridIcon = ({ icon }: GridIconProps) => {
  const Icon = createElement(icons[icon]);
  return Icon;
};
