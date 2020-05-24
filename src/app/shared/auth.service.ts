import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { VerifyTokenGQL, TokenAuthGQL, RefreshTokenGQL, RegisterUserGQL } from 'src/generated/types.graphql-gen';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apollo: Apollo,
    private registerMutation: RegisterUserGQL,
    private tokenAuthMutation: TokenAuthGQL,
    private verifyTokenMutation: VerifyTokenGQL,
    private refreshTokenMutation: RefreshTokenGQL,
  ) { }

  register(formObject: any) {
    return this.registerMutation.mutate(formObject).pipe(
      tap(({ data }) => {
        console.log(data);
      })
    );
  }

  login(formObject: any) {
    return this.tokenAuthMutation.mutate(
      formObject
    ).pipe(
      tap(({data}) => {
        localStorage.setItem('auth', JSON.stringify({
          token: data.tokenAuth.token,
          payload: data.tokenAuth.payload,
          refreshToken: data.tokenAuth.refreshToken,
          refreshExpiresIn: data.tokenAuth.refreshExpiresIn
        }));
        localStorage.setItem('userData', JSON.stringify({
          username: data.tokenAuth.user.username,
          firstName: data.tokenAuth.user.profile.firstName,
          lastName: data.tokenAuth.user.profile.lastName,
          fullName: data.tokenAuth.user.profile.firstName + ' ' + data.tokenAuth.user.profile.lastName
        }));
      })
    );
  }

  logout(): void {
    localStorage.clear();
    this.apollo.getClient().stop();
    this.apollo.getClient().resetStore();
  }

  private handleError(errorResponse: HttpErrorResponse) {
    console.log(errorResponse);
    return throwError(errorResponse);
  }

  verifyToken() {
    return this.verifyTokenMutation.mutate(
      { token: this.getToken() }
    ).pipe(
      catchError(this.handleError)
    );
  }

  async refreshToken() {
    let auth = JSON.parse(localStorage.getItem('auth'));
    return this.refreshTokenMutation.mutate({
      refreshToken: auth.refreshToken
    }).pipe(
      tap(({data}) => {
        localStorage.setItem('auth', JSON.stringify(data.refreshToken));
      })
    ).toPromise();
  }

  getToken() {
    let auth = JSON.parse(localStorage.getItem('auth'));
    return auth ? auth.token : false;
  }
}
