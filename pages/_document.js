import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html>
      <Head />
      <body>
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EH5G4K2KFR"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-EH5G4K2KFR');
              `,
          }}
        /> */}
        <Main />
        <div id="modal" />
        <NextScript />
      </body>
    </Html>
  );
}
