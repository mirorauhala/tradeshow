

interface SearchBarProps {
  defaultList: any[];
  setFilteredArray: (sortableArray: any[]) => void;
}


const SearchBar = (props: SearchBarProps) => {


  const { defaultList, setFilteredArray } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filteredArray = defaultList.filter((item) => {
      return item.attributes.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setFilteredArray(filteredArray);
  };

  return (
    <div className="rounded-xl border-2 border-black p-2 flex flex-row items-center bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6 m-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input className="p-2 focus:outline-none" placeholder="Search" onChange={handleChange}></input>
    </div>
  );
};

export default SearchBar;
