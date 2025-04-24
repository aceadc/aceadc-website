import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Posthog */}
        <script async src="/posthog.js"></script>

        {/* Tidio Chatbot */}
        {/* <script
          src="//code.tidio.co/j9cbswajqzsl5bjumoytsqhp6cwjew9s.js"
          async
        ></script> */}

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

        {/* Meta Pixel Code */}
        <script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1854253835378531');
            fbq('track', 'PageView');
          `,
          }}
        />

        {/* NoScript Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1854253835378531&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>
        {/* End Meta Pixel Code */}

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

        {/* AHREFS */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="vMJvi/DoUwn/ouiBy5f1ew"
          async
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
