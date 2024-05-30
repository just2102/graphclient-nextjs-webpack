"use client";

import styles from "./page.module.css";
import { useQuery } from "@apollo/client";
import { GetBundlesDocument } from "@/data/graphql/.graphclient/index";

export default function Info() {
  // this query throws webpack error.
  const result = useQuery(GetBundlesDocument);

  console.log("result: ", result);

  // console.log("data: ", data);

  return (
    <main>
      <h2>Info page</h2>

      <div className={styles.info}>
        {/* <h1>ETH Price: ${data?.bundles[0].ethPriceUSD}</h1> */}
      </div>
    </main>
  );
}
