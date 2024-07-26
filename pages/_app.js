import Head from 'next/head';
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

        {/* Responsive Meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* Additional head content can go here */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
