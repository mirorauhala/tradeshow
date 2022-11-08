export const BackLink = ({ to }: { to: string }) => {
  return (
    <div className="-mt-6">
      <a href={to} className="inline-block text-sm font-medium text-slate-600">
        Back
      </a>
    </div>
  );
};
