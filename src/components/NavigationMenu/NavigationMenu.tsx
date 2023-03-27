import React from "react";
import Link from "next/link";
import Image from "next/image";
const NavigationMenu = () => {
  return (
    <header className="sticky top-0 z-[100] w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-screen-2xl grid-cols-3 items-center px-4 py-3 md:grid">
        {/* logo */}
        <div className="flex items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                className="h-[2rem] w-full object-cover"
                width={100}
                height={100}
                src="./vital-logo.svg"
                alt="Event Image"
              />
            </Link>
          </div>
        </div>
        {/* menu items */}

        <div className=" flex flex-grow justify-evenly">
          <div className="flex items-center sm:justify-center">
            <Link href="/events" className="text-lg font-bold text-gray-800">
              Events
            </Link>
          </div>
          <div className="flex items-center sm:justify-center">
            <Link href="/join" className="text-lg font-bold text-gray-800">
              Join
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationMenu;
