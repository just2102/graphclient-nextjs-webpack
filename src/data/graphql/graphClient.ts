import { ApolloClient, InMemoryCache } from "@apollo/client";

const graphClient = new ApolloClient({
  uri: `https://gateway-arbitrum.network.thegraph.com/api/${process.env.NEXT_PUBLIC_THE_GRAPH_API_KEY}/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV`,
  cache: new InMemoryCache(),
});

export default graphClient;
