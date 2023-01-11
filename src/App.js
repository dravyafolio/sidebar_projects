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
    <div className="">doremon</div>
    
    </>


  );
}

export default App;
