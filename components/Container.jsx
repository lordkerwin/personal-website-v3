import Head from "next/head";
import { useRouter } from "next/router";

const Container = (props) => {
    const router = useRouter();

    const { children, ...customMeta } = props;

    const meta = {
        title: "Sean Kerwin - Front End Developer",
        description: "Front End Developer based in Wiltshire, UK",
        image: "https://seankerwin.dev/static/banner.jpg",
        type: "website",
        ...customMeta,
    };

    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta
                    property="og:url"
                    content={`https://seankerwin.dev${router.asPath}`}
                />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Sean Kerwin" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@snwkrwn" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                <link
                    rel="canonical"
                    href={`https://seankerwin.dev${router.asPath}`}
                />
            </Head>
            <div>
                <main className="container py-8">{children}</main>
            </div>
        </div>
    );
};

export default Container;
