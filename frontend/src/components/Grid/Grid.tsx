export const Grid = ({ children }: { children: React.ReactNode }) => {
  return <ul className="grid grid-flow-row gap-3 ">{children}</ul>;
};
