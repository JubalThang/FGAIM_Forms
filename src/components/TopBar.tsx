export default function TopBar() {
  return (
    <div className=" relative h-16 md:h-32 w-full">
      <div className=" h-full flex justify-between items-center bg-white ">
            <img src="fgaim_church.jpg" alt="church logo" className=" h-16 md:h-20 xl:h-24 p-2 mx-auto md:mx-4 w-auto m-2 "/>
            <div className="  hidden absolute md:flex w-full justify-center">
                <h1 className=" text-2xl lg:text-4xl text-gray-900 font-bold ">FGAIM Forms</h1>
            </div>
      </div>
    </div>
  );
}
