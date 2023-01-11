import { useState } from "react";
import Navigation from "./Components/Navigation";

function App() {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: 'Dashboard', src: 'logo192' },
    { title: 'inbox ', src: 'logo192' },
    { title: 'ACCOUNTS', src: 'logo192' },
    { title: 'SCHEDULE', src: 'logo192' },
    { title: 'SEARCH', src: 'logo192' },
    { title: 'ANALYTICS', src: 'logo192' },
    { title: 'ADS', src: 'logo192' },
    { title: 'FILES', src: 'logo192' },
    { title: 'BACKUP', src: 'logo192' },
    { title: 'SETTINGS  ', src: 'logo192' },
  ]

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <>
    <div className="h--screen flex justify-center items-center bg-[#e2d7d7]">
  <Navigation />
</div>
      <div className="flex">
        <div className={` ${open ? 'w-72' : 'w-20'}  bg-dark-purple h-screen p-5 pt-8 relative duration-300`}>
          <img src="dravya.ico" alt="dravyafolio" className={`absolute  cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && "rotate-[360deg]"} duration-200 `}
            onClick={handleClick}
          />
          <div className="flex gap-x-4 items-center">
            <img src=" logo192.png" alt="dravyafolio" className={`
          cursor-pointer duration-500 hover:scale-150 ${open && "rotate-[360deg]"}
          ${!open ? "w-8 h-8" : 'w-16 h-16'}
        `} />
            <h1 className={`text-[#f1f1f1] cursor-pointer hover:text-2xl  origin-left font-medium text-xl duration-100 ${!open && 'scale-0'}`}>Designer</h1>

          </div>

          <ul className="pt-6">
            {Menus.map((Menu, index) =>
              <li key={index} className={`flex rounded-md p-2 hover:border-2  hover:bg-[#120a61] cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 first-letter:${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}>
                <img src={`${Menu.src}.png`} alt="dravyafolio" className={` ${open ? "w-4 h-4" : " "}`} />
                <span className={`${!open && "hidden"} origin-left duration-200 hover:text-xl hover:font-bold`}>
                  {Menu.title}
                </span>
              </li>)}
          </ul>
        </div>
      </div>

{/* -------------------------------Mobiel menu------------------ */}

    </>


  );
}

export default App;
