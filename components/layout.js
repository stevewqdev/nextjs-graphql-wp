import React from "react";
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

import Header from "../components/header/index"
import Footer from "../components/footer/index"

// Instantiate required constructor fields
const cache = new InMemoryCache();

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: createHttpLink({
    uri: "https://gatsby.raxo.dev/graphql",
    fetch: fetch,
  }),
});

const Layout = props => (
  <div className="Layout" >
    <ApolloProvider client={client}>
      <Header />
      <div className="Content" >
        {props.children}
      </div>
      <Footer />
    </ApolloProvider>
  </div>
);


export default Layout;