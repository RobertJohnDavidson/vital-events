import { type AppType } from "next/app";
import { Analytics } from "@vercel/analytics/react";
// import { Source_Sans_3, Oswald } from "@next/font/google";
import Layout from "~/components/Layout/Layout";
import "~/styles/globals.css";

// const sourceSans = Source_Sans_3({
//   subsets: ["latin"],
// });
// const oswald = Oswald({
//   subsets: ["latin"],
// });

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <Layout>
      {<Component {...pageProps} />}
      <Analytics />
    </Layout>
  );
};

export default MyApp;
