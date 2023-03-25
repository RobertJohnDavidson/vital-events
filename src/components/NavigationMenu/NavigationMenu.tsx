import React from "react";
type NavigationMenuProps = {};

const NavigationMenu = (props: NavigationMenuProps) => {
  return (
    <header className="sticky top-0 z-[100] w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-screen-2xl grid-cols-3 items-center px-4 py-3 md:grid">
        {/* logo */}
        <div className="flex items-center">
          <div className="flex items-center">
            <a href="/">
              <img
                className="h-[2rem] w-full object-cover"
                src="./vital-logo.svg"
                alt="Event Image"
              />
            </a>
          </div>
        </div>
        {/* menu items */}

        <div className=" flex flex-grow justify-evenly">
          <div className="flex items-center sm:justify-center">
            <a href="/events" className="text-lg font-bold text-gray-800">
              Events
            </a>
          </div>
          <div className="flex items-center sm:justify-center">
            <a href="/join" className="text-lg font-bold text-gray-800">
              Join
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationMenu;
