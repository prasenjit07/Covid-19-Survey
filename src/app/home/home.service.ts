import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class HomeService {
  
  private homeUrl='api/homes';

  
  constructor(private http : HttpClient) { }

  getHomes(): Observable<any> {
    return this.http.get<any>(this.homeUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getHome(id:number): Observable<any> {
    if (id === 0) {
      return of(this.initializeProduct());
    }
    const url = `${this.homeUrl}/${id}`;
    return this.http.get<any>(url)
      .pipe(
        tap(data => console.log('getProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createHome(home: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    home.id = null;
    return this.http.post<any>(this.homeUrl, home, { headers })
      .pipe(
        tap(data => console.log('createHome: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteProduct(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.homeUrl}/${id}`;
    return this.http.delete<any>(url, { headers })
      .pipe(
        tap(data => console.log('deleteProduct: ' + id)),
        catchError(this.handleError)
      );
  }

  updateHome(home:any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.homeUrl}/${home.id}`;
    return this.http.put<any>(url, home, { headers })
      .pipe(
        tap(() => console.log('updateHome: ' + home.id)),
        // Return the home on an update
        map(() => home),
        catchError(this.handleError)
      );
  }


  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


  private initializeProduct(): any {
    // Return an initialized object
    return {
      id: 0,
      houseNumber:null,
      houseAddress:null,
      member:[{
        name:'',
        gender:'',
        age:''
      }]
    };
  }
}

