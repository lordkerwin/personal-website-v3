import "../styles/globals.scss";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Header from "@components/Header";
import Footer from "@components/Footer";

function MyApp({ Component, pageProps, router }) {
    const url = `https://seankerwin.dev${router.route}`;

    return (
        <>
            <ThemeProvider
                enableSystem="false"
                defaultTheme="dark"
                attribute="class"
            >
                <Header />
                <AnimatePresence
                    mode="wait"
                    initial={false}
                    onExitComplete={() => window.scrollTo(0, 0)}
                >
                    <Component {...pageProps} key={url} />
                </AnimatePresence>
                <Footer />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
