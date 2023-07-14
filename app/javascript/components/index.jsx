import React from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import Transactions from "./Transactions";

const csrfToken = document
  .querySelector('meta[name=csrf-token]')
  .getAttribute('content')

const client = new ApolloClient({
  link: new HttpLink({
    credentials: 'same-origin',
    headers: {
      'X-CSRF-Token': csrfToken,
    },
  }),
  cache: new InMemoryCache(),
})

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  )
  root.render(
    <ApolloProvider client={client}>
      <Transactions />
    </ApolloProvider>,
  )
});
