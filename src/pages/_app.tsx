import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";
import { Source_Sans_3, Oswald } from "@next/font/google";
import Layout from "~/components/Layout/Layout";
import "~/styles/globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
});
const oswald = Oswald({
  subsets: ["latin"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <style jsx global>
        {`
          :root {
            --source-sans-3-font: ${sourceSans.style.fontFamily};
            --oswald-font: ${oswald.style.fontFamily};
          }
        `}
      </style>
      <Layout>{<Component {...pageProps} />}</Layout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
