import React from "react";
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

import Header from "../components/header/index"

// Instantiate required constructor fields
const cache = new InMemoryCache();

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: createHttpLink({
    uri: "https://gatsby.raxo.dev/graphql",
    fetch: fetch,
  }),
  // Provide some optional constructor fields
  name: 'react-web-client',
  version: '1.3',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export default ({ children }) => (
  <div>
    <ApolloProvider client={client}>
      <Header />
      {children}
      <footer>
        Made by Steve Quezada, Raxo
      </footer>
    </ApolloProvider>
  </div>
);