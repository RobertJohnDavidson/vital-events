import React from "react";

type NavigationMenuProps = {};

const NavigationMenu = (props: NavigationMenuProps) => {
  return (
    <header className="z-100 sticky top-0 w-full shadow-sm">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-800">
              Vital Events
            </a>
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
