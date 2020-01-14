import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ApolloClient from "apollo-boost"
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
    uri: "https://mypetgram-server.paulclindo.now.sh/graphql"
})

const container = document.getElementById("app");

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , container);