import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Posthog */}
        <script async src="/posthog.js"></script>

        {/* Tidio Chatbot */}
        <script
          src="//code.tidio.co/j9cbswajqzsl5bjumoytsqhp6cwjew9s.js"
          async
        ></script>

        {/* Google Analytics */}
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

        {/* Facebook Meta Tag */}
        <meta
          name="facebook-domain-verification"
          content="s67cp2q4pq09ftugcdo93dyrqaz1x9"
        />

        {/* Responsive Meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* Sender Popup */}
        <script
          id="sender-script"
          dangerouslySetInnerHTML={{
            __html: `
            (function (s, e, n, d, er) {
              s['Sender'] = er;
              s[er] = s[er] || function () {
                (s[er].q = s[er].q || []).push(arguments)
              }, s[er].l = 1 * new Date();
              var a = e.createElement(n),
                  m = e.getElementsByTagName(n)[0];
              a.async = 1;
              a.src = d;
              m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js', 'sender');
            sender('aceb5a7aef2115')
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
