import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

import { Nunito } from "@next/font/google";

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

export default trpc.withTRPC(MyApp);
