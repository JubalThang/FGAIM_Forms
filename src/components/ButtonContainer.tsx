export interface Button {
  name: string;
  link: string;
}

export default function ButtonContainer({ name, link }: Button) {
  return (
    <div className=" border border-white p-3 rounded-md hover:bg-gray-600 cursor-pointer ">
      <a href={link}>
        <h1 className=" text-3xl text-center font-light ">{name}</h1>
      </a>
    </div>
  );
}
