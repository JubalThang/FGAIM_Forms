export default function TopBar() {
  return (
    <div className=" h-32 w-full">
      <div className=" h-full flex justify-between items-center bg-white ">
            <img src="fgaim_church.jpg" alt="church logo" className=" h-24 w-auto"/>
            <div className="flex-1">
                <h1 className=" 
                text-gray-900 
                text-4xl 
                font-black
                text-center
                "> FGAIM Forms</h1>
            </div>
      </div>
    </div>
  );
}
