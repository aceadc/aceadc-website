import "../styles/tailwind.css";
import posthog from "posthog-js";

function MyApp({ Component, pageProps }) {
  posthog.init("phc_R17sVKHIGHxghzeD3EPlmTMwxr0px1L6d31QLr4FAjY", {
    api_host: "https://us.i.posthog.com",
  });
  return <Component {...pageProps} />;
}

export default MyApp;
