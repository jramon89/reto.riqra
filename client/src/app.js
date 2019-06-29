import React from 'react';
import { render } from 'react-dom';
import { renderRoutes } from 'react-router-config';
import RoutesApp from './router/client.routes';
import Routes from './router/routes';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import './css/styles.scss';

const client = new ApolloClient({
	uri: "https://graphi-server.herokuapp.com/api" //http://localhost:4000/api --> only for local server with MySQL running
});


render(
	<ApolloProvider client={ client }>
		{ RoutesApp(renderRoutes(Routes)) }
	</ApolloProvider>,
	document.getElementById('app')
);
