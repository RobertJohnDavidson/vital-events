import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Footer from "../Footer/Footer";
import { ReactElement } from "react";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="relative mx-auto min-h-screen max-w-screen-2xl">
      <NavigationMenu />
      {children}
      <Footer />
    </div>
  );
}
