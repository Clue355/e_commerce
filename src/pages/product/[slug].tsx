import { useRouter } from "next/router";
import { withRouter } from "next/router";

import { createClient } from "@urql/core";
import { atomWithQuery } from "jotai/urql";
import { useHydrateAtoms } from "jotai/utils";
import { useAtom } from "jotai";
import { queryAtom } from "../../atomStore";

import { GET_PRODUCT_QUERY } from "../../util/slugquery";

const client = createClient({
    url: process.env.NEXT_PUBLIC_STRAPI_URL,
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
    const [result] = useAtom(slugAtom);

    return (
        <div className="h-screen flex justify-center items-center">
            <h2>{result.data.products.data[0].attributes.title}</h2>
        </div>
    );
}

// export const getServerSideProps = async (context: any) => {
//     let { slug } = context.query;

//     if (!slug) {
//         slug = null;
//     }

//     return { props: { slug: slug } };
// };
