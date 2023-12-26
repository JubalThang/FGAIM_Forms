import "./App.css";
import TopBar from "./components/TopBar";
import { buttons } from './button_lists'
import ButtonContainer from "./components/ButtonContainer";

function App() {
  return (
    <>
      <TopBar />
      <div className=" xl:w-[70%] xl:mx-auto mx-20 p-20">
            <div className=" w-full gap-20 grid lg:grid-cols-2 ">
              {
                buttons.map(button => (
                  <ButtonContainer name={button.name} link={button.link}/>
                ))
              }
            </div>      
      </div>
    </>
  );
}

export default App;
