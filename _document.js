import Document, { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html>
      <Head>
        {/* You can add other meta tags or links in the Head here */}
      </Head>
      <body>
        <Main />
        <NextScript />
        
        {/* Tidio script injected using dangerouslySetInnerHTML */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <script src="https://code.tidio.co/sf7zqeagqkbig5d56iqlot3fq8nygg0k.js" async></script>
            `,
          }}
        />
      </body>
    </Html>
  );
}
