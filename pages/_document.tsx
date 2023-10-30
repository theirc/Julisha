import { Head, Html, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html>
      <Head>
        <script
          src="https://kit.fontawesome.com/027db3ea3f.js"
          crossOrigin="anonymous"
          async
        ></script>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"
          rel="stylesheet"
        />
        <script
          src="https://cdn-eu.readspeaker.com/script/11950/webReader/webReader.js?pids=wr"
          type="text/javascript"
          id="rs_req_Init"
          defer
        ></script>
        {
          <script
            id="ze-snippet"
            src="https://static.zdassets.com/ekr/snippet.js?key=64e5f31e-ed92-4ca6-aaf4-414e38e24bdd"
            async
          ></script>
        }
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
