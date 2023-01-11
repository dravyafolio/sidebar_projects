import React, { useState } from "react";

const Navigation = () => {
  const menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0" },
    { name: "Profile", icon: "person-outline", dis: "translate-x-16" },
    { name: "Message", icon: "chatbubble-outline", dis: "translate-x-32" },
    { name: "Photos", icon: "camera-outline", dis: "translate-x-48" },
    { name: "Settings", icon: "settings-outline", dis: "translate-x-64" },
  ];

  const [active, setActive] = useState(0);

  return (
    <>
      <div className="bg-[#fffbfb] max-h-[4.4rem] px-6 rounded-t-xl">
        <ul className="flex relative">
            <span className={``}>
                <span className="">

                </span>
                <span className="">

                </span>
            </span>


            {menus.map((menu,i)=>(
                // <li key={i} className="flex-1 flex justify-center items-center"></li>
                // <div></div>
                <li className="" key={i}>
                    <a href="/" className="">
                        {/* <span className="">
                        </span> */}
                        <ion-icon name={menu.icon}></ion-icon>
                    </a>
                </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
