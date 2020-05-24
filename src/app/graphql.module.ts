import { NgModule } from '@angular/core';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { onError } from 'apollo-link-error';
import { AuthService } from './shared/auth.service';

@NgModule({
  exports: [ApolloModule, HttpLinkModule, HttpClientModule],
})
export class GraphQLModule {

  constructor(public apollo: Apollo, public httpLink: HttpLink, public auth: AuthService) {
    const uri = 'http://127.0.0.1:8000/';
    const http = httpLink.create({ uri: uri });

    const authMiddleware = new ApolloLink((operation, forward) => {
      const token = auth.getToken();
      if (token) {
        operation.setContext({
          headers: new HttpHeaders().set('Authorization', `JWT ${token}`)
        });
      }
      return forward(operation);
    });

    const errorLink = onError(({ networkError, graphQLErrors, operation, forward }) => {
      if (networkError) { console.log(networkError); }

      if (graphQLErrors) {
        console.log(graphQLErrors);
        graphQLErrors.forEach(({ message }) => {
          console.log(message);
          switch(message) {
            case 'Signature has expired':
              auth.refreshToken().then(() => {
                window.location.reload();
              });
              const token = auth.getToken();
              operation.setContext({
                headers: new HttpHeaders().set('Authorization', `JWT ${token}`)
              });
          }
        });
      }
      return forward(operation);
    });

    apollo.create({
      link: ApolloLink.from([authMiddleware, errorLink, http]),
      cache: new InMemoryCache(),
    });
  }

  getAuthMiddleware() {
    return new Promise((resolve, reject) => {
      return new ApolloLink((operation, forward) => {
        const token = this.auth.getToken();
        if (token) {
          operation.setContext({
            headers: new HttpHeaders().set('Authorization', `JWT ${token}`)
          });
        }
        return forward(operation);
      });
    })
  }

  getErrorAfterware() {
    return new Promise((resolve, reject) => {

    })
  }
}
