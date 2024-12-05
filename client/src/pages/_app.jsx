import { StateProvider } from "@/context/StateContext";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <title>Whatsapp</title>
        <link rel="shortcut icon" herf="/favicon.png" />
      </Head>
      </StateProvider>
 );
}
return <Component {...pageProps} />;

 