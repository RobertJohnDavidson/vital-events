import React from "react";

type NavigationMenuProps = {};

const NavigationMenu = (props: NavigationMenuProps) => {
  return (
    <header className="sticky top-0 z-[100] w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <div className="flex items-center">
            <img
              className="h-[2rem] w-full object-cover"
              src="./vital-logo.svg"
              alt="Event Image"
            />
          </div>
        </div>
        <div className="flex items-center">
          <a href="/login" className="text-lg font-bold text-gray-800">
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavigationMenu;
