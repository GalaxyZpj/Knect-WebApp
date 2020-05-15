import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from "apollo-link-context";
import { ApolloLink } from 'apollo-link';
import { HttpClientModule } from '@angular/common/http';

const uri = 'http://127.0.0.1:8000/'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {
  const token = localStorage.getItem('token');

  const auth = setContext((operation, context) => ({
    headers: {
      Authorization: `JWT ${token}`
    }
  }));

  const link = ApolloLink.from([auth, httpLink.create({ uri })]);
  
  return {
    link: link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
