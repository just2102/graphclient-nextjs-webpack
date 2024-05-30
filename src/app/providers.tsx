"use client";

import graphClient from "@/data/graphql/graphClient";
import { ApolloProvider } from "@apollo/client";

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ApolloProvider client={graphClient}>{children}</ApolloProvider>;
}
