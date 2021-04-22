import Document, { Html, Head, NextScript, Main } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
