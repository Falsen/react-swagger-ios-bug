import React from "react";
import ReactDOM from "react-dom";
import SwaggerClient from 'swagger-client';


function Root(){
	return <div>It works!</div>
}

let SWAGGER_SPEC = {
	"swagger": "2.0",
	"info": {
		"version": "1.0.0",
		"title": "API"
	},
	"host": "",
	"basePath": "/api",
	"tags": [
		{"name": "authentication"},
	],
	"schemes": ["https"],
	"paths": {
		"/authstatus": {
			"get": {
				"operationId": "getAuthStatus",
				"tags": ["authentication"],
				"produces": ["application/json"],
				"responses": {
					"200": {"schema": {"$ref": "#/definitions/AuthStatus"}},
					"400": {}
				}
			}
		}
	}
}

document.getElementById('root').innerHTML = 'loading...';

new SwaggerClient({spec: JSON.stringify(SWAGGER_SPEC)})
	.then(client => {
		ReactDOM.render(<Root clientApi={client}/>, document.getElementById('root'));
	}).catch(err => {
		console.error("error, fetching swagger", err);
		document.getElementById('root').innerHTML = 'Error fetching swagger: ' + err;
	}
);
