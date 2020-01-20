import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './components/App';
import Context from './Context';

const client = new ApolloClient({
  uri: 'https://mypetgram-server.paulclindo.now.sh/graphql',
});

const container = document.getElementById('app');

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  container
);
