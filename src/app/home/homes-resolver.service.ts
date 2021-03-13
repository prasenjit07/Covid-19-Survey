import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HomeResolved } from './home';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class HomesResolverService implements Resolve<HomeResolved> {

  constructor(private homeService: HomeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<HomeResolved> {
    return this.homeService.getHomes()
      .pipe(
        map(home => ({ home: home })),
        catchError(error => {
          const mssg = `No house`;
          console.log(mssg);
          return of({ home: null, error: mssg });
        })
      )
  }
}
