import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";

/* TIPS:
 * Här kopplar du ihop komponenter från din kod med storybloks blok
 */
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  // storybloks-komponent-namn: kod-komponent-namn
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN, // Din preview token
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
