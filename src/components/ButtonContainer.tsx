export interface Button {
  name: string;
  link: string;
}

export default function ButtonContainer({ name, link }: Button) {
  return (
    <div className=" border border-white py-4 rounded-md hover:bg-gray-600 cursor-pointer min-w-max ">
      <a href={link}>
        <h1 className=" md:text-xl text-center xl:font-medium ">{name}</h1>
      </a>
    </div>
  );
}
