import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { clsx } from "clsx";
import React from "react";

type NavigationMenuProps = {};

const NavigationMenu = (props: NavigationMenuProps) => {
  return (
    <NavigationMenuPrimitive.Root className="relative w-full rounded-sm bg-gray-900 p-2">
      <NavigationMenuPrimitive.List className="flex flex-row justify-center space-x-20 ">
        <NavigationMenuPrimitive.Item asChild></NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item asChild>
          <NavigationMenuPrimitive.Link
            href="https://github.com/ecklf/tailwindcss-radix"
            className={clsx(
              "px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-900",
              "font-primary text-lg font-medium text-gray-700 dark:text-gray-100"
            )}
          >
            Home
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item asChild>
          <NavigationMenuPrimitive.Link
            href="https://github.com/ecklf/tailwindcss-radix"
            className={clsx(
              "px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-900",
              "font-primary text-lg font-medium text-gray-700 dark:text-gray-100"
            )}
          >
            Events
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item asChild>
          <NavigationMenuPrimitive.Link
            href="https://github.com/ecklf/tailwindcss-radix"
            className={clsx(
              "px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-900",
              "font-primary text-lg font-medium text-gray-700 dark:text-gray-100"
            )}
          >
            Join
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
      </NavigationMenuPrimitive.List>

      <div
        className={clsx(
          "absolute flex justify-center",
          "left-[-20%] top-[100%] w-[140%]"
        )}
        style={{
          perspective: "2000px",
        }}
      >
        <NavigationMenuPrimitive.Viewport
          className={clsx(
            "relative mt-2 overflow-hidden rounded-md bg-white shadow-lg dark:bg-gray-800",
            "w-radix-navigation-menu-viewport",
            "h-radix-navigation-menu-viewport",
            "radix-state-open:animate-scale-in-content",
            "radix-state-closed:animate-scale-out-content",
            "origin-[top_center] transition-[width_height] duration-300 ease-[ease]"
          )}
        />
      </div>
    </NavigationMenuPrimitive.Root>
  );
};

export default NavigationMenu;
