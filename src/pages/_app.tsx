import { type AppType } from "next/app";
import { Nunito } from "@next/font/google";

import { t } from "utils/trpc";

import "styles/globals.css";


const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${nunito.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
};

export default t.withTRPC(MyApp);
