import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { VerifyTokenGQL } from 'src/generated/types.graphql-gen';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private verifyTokenMutation: VerifyTokenGQL) { }

  private handleError(errorResponse: HttpErrorResponse) {
    console.log(errorResponse);
    return throwError(errorResponse);
  }

  verifyToken() {
    return this.verifyTokenMutation.mutate(
      { token: localStorage.getItem('token') }
    ).pipe(
      catchError(this.handleError)
    )
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
