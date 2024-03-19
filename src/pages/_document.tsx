import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:image" content="/Thumbnail.jpg" />
                <meta property="og:url" content="/" />
                <meta property="og:title" content="memecrapbook" />
                <meta property="og:image:alt" content="memecrapbook" />
                <meta property="og:description" content="Change web3 culture by combining memes, decentralized storage solutions, and degen shitcoin trade and gambling." />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="memecrapbook" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
