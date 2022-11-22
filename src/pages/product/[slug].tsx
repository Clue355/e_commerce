import { createClient } from "@urql/core";
import { atomWithQuery } from "jotai/urql";

import { useAtom } from "jotai";
import { queryAtom } from "../../atomStore";

import { GET_PRODUCT_QUERY } from "../../util/slugquery";

const client = createClient({
    url: "https://ecommercebackend-production.up.railway.app/graphql",
});

const slugAtom = atomWithQuery(
    (get) => ({
        query: GET_PRODUCT_QUERY,
        variables: {
            slug: get(queryAtom),
        },
    }),
    () => client,
);

export default function ProductPage() {
    const [result] = useAtom<any>(slugAtom);

    return (
        <div className="h-screen flex justify-center items-center">
            <h2>{result.data.products.data[0].attributes.title}</h2>
        </div>
    );
}
