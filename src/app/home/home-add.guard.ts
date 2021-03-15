import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { HomeAddComponent } from './home-add.component';
import {Observable} from'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HomeAddGuard implements CanDeactivate<HomeAddComponent> {
  canDeactivate(component:HomeAddComponent) : Observable<boolean>| boolean | Promise<boolean >  {
    if(component.houseForm.dirty)
    {
      const houseNumber=component.houseForm.get('houseNumber').value;

      if(houseNumber)
      return confirm(`You will lose all changes for houseNumber ${houseNumber}`);
      //For a new house
      return confirm(`You will lose all changes for the new house`);
    }
    return true;
  }
  
}
