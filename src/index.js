import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { toast } from "react-toastify";
const root = ReactDOM.createRoot(document.getElementById("root"));
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_BACKEND_URL + "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => {
      if (
        window.location.pathname === "/login" &&
        path?.[0] === "getUserData"
      ) {
        return;
      } else if (
        window.location.pathname === "/" &&
        path?.[0] === "getUserData"
      ) {
        return;
      } else {
        toast.error(message);
      }
    });

  if (networkError) toast.error(networkError);
});

const client = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
