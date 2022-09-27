import type { NextPage } from "next";
import Head from "next/head";

import { useAtom } from "jotai";
import { itemsAtom } from "../atomStore";

import Product from "../components/product";

const Home: NextPage = () => {
    const [items] = useAtom(itemsAtom);
    return (
        <>
            <Head>
                <title>clothing store</title>
                <meta name="description" content="" />
                <link rel="icon" href="" />
            </Head>

            <main className="">
                <div className="flex flex-wrap w-3/5 mb-0 mt-6 mx-auto">
                    {items.map((item: any) => (
                        <Product
                            key={item.attributes.slug}
                            id={item.attributes.slug}
                            title={item.attributes.title}
                            desc={item.attributes.description}
                            price={item.attributes.price}
                            image={item.attributes.image.data.attributes.formats.medium.url}
                        />
                    ))}
                </div>
            </main>
        </>
    );
};

export default Home;
