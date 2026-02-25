export interface Button {
  name: string;
  link: string;
  isActive: boolean;
}

export default function ButtonContainer({ name, link, isActive }: Button) {
  const activeClasses =
    "border border-white py-4 rounded-md hover:bg-gray-600 cursor-pointer min-w-max";
  const inactiveClasses =
    "border border-gray-300 py-4 rounded-md bg-gray-100 text-gray-400 cursor-not-allowed min-w-max opacity-80";

  return (
    <div className={isActive ? activeClasses : inactiveClasses} aria-disabled={!isActive}>
      {isActive ? (
        <a href={link}>
          <h1 className="flex w-full justify-center items-center h-full md:text-xl text-center xl:font-medium">{name}</h1>
        </a>
      ) : (
        <div tabIndex={-1}>
          <h1 className="md:text-xl text-center xl:font-medium">{name}</h1>
          <p className="text-red-600 text-sm text-center mt-2">coming soon</p>
        </div>
      )}
    </div>
  );
}
