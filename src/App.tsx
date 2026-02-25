import "./App.css";
import TopBar from "./components/TopBar";
import { buttons } from './button_lists'
import ButtonContainer from "./components/ButtonContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <TopBar />
      <div className=" flex-1 xl:w-[70%] xl:mx-auto md:mx-20 p-20">
            <div className=" w-full gap-20 grid lg:grid-cols-2 ">
              {
                buttons.map(button => (
                  <ButtonContainer key={button.name} name={button.name} link={button.link} isActive={button.isActive} />
                ))
              }
            </div>      
      </div>
      <Footer />
    </div>
  );
}

export default App;
