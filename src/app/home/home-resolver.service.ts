import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HomeResolved } from './home';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolverService implements Resolve<HomeResolved> {

  constructor(private homeService: HomeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<HomeResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const mssg = `Home id was not a number: ${id}`;
      console.log(mssg);
      return of({ home: null, error: mssg });
    }
    return this.homeService.getHome(+id)
      .pipe(
        map(home => ({ home: home })),
        catchError(error => {
          const mssg = `No house with id: ${id}`;
          console.log(mssg);
          return of({ home: null, error: mssg });
        })
      )
  }
}
