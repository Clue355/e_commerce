import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { useAtom } from "jotai";
import { itemsAtom, queryAtom } from "../atomStore";

import Product from "../components/product";

const Home: NextPage = () => {
    const [items] = useAtom(itemsAtom);
    const [, setQuery] = useAtom(queryAtom);

    function handleClick(slug: string) {
        setQuery(slug);
    }

    return (
        <>
            <Head>
                <title>clothing store</title>
                <meta name="description" content="" />
                <link rel="icon" href="" />
            </Head>

            <main className="">
                <div className="flex flex-wrap w-3/5 mb-0 mt-6 mx-auto">
                    {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        items.map((item: any) => (
                            <Link key={item.attributes.slug} href={`/product/${item.attributes.slug}`}>
                                <button onClick={() => handleClick(item.attributes.slug)}>
                                    <Product
                                        id={item.attributes.slug}
                                        title={item.attributes.title}
                                        desc={item.attributes.description}
                                        price={item.attributes.price}
                                        image={item.attributes.image.data.attributes.formats.medium.url}
                                    />
                                </button>
                            </Link>
                        ))
                    }
                </div>
            </main>
        </>
    );
};

export default Home;
