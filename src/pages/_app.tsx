import { createClient, gql } from "@urql/core";
import { atomWithQuery } from "jotai/urql";

import { Provider, useAtom } from "jotai";

import { QUERY } from ".././util/query";

import { itemsAtom } from ".././atomStore";

import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";

const client = createClient({
    url: "http://localhost:1337/graphql",
});

const productAtom = atomWithQuery(
    () => ({
        query: QUERY,
        variables: {},
    }),
    () => client,
);

const MyApp: AppType = ({ Component, pageProps }) => {
    const [result] = useAtom<any>(productAtom);
    // console.log(result.data.products.data);
    return (
        <Provider initialValues={[[itemsAtom, result.data.products.data]] as const}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default MyApp;
