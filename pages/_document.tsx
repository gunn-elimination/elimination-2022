import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';

class GDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html className="h-full dark">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <body className="h-full dark:bg-gradient-to-br dark:from-zinc-900 dark:to-black dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default GDocument;
