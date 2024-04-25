import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html>
      <Head />
      <body>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L1QKPLTWQX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-L1QKPLTWQX');
              `,
          }}
        />
        <script src="/posthog.js" />
        <Main />
        <div id="modal" />
        <NextScript />
      </body>
    </Html>
  );
}
