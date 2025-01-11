// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add any other meta tags or external resources here */}
        </Head>
        <body>
          <Main />
          <NextScript />
          
          {/* Tidio Chat Script */}
          <script
            src="//code.tidio.co/sf7zqeagqkbig5d56iqlot3fq8nygg0k.js"
            async
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
