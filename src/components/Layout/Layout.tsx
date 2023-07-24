import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Footer from "../Footer/Footer";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-screen-2xl flex-col justify-between">
      <NavigationMenu />
      {children}
      <Footer />
    </div>
  );
}
