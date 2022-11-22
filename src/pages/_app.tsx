import { createClient } from "@urql/core";
import { atomWithQuery } from "jotai/urql";

import { Provider, useAtom } from "jotai";

import { QUERY } from ".././util/query";

import { itemsAtom } from ".././atomStore";

import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";

const client = createClient({
    url: "https://ecommercebackend-production.up.railway.app/graphql",
});

const productAtom = atomWithQuery(
    () => ({
        query: QUERY,
        variables: { headers: { Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_TOKEN } },
    }),
    () => client,
);

const MyApp: AppType = ({ Component, pageProps }) => {
    const [result] = useAtom<any>(productAtom);
    return (
        <Provider initialValues={[[itemsAtom, result.data.products.data]] as const}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default MyApp;
