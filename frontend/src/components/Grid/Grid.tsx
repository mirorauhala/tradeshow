export const Grid = ({ children }: { children: React.ReactNode }) => {
  return <ul className="grid grid-flow-row grid-cols-2 gap-3">{children}</ul>;
};
